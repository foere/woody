#!/usr/bin/env python3
"""
Import hand-drawn GPX routes into data.js.

Drop a .gpx file into routes/ named after the walk's id, e.g. routes/village.gpx,
then run:

    python3 tools/import-gpx.py

Each file replaces that walk's `route:` array. Walks with no matching file are
left alone, so you can do them a few at a time.

    python3 tools/import-gpx.py --describe

also prints the named roads and paths each route actually passes along, which is
what Claude needs to rewrite the walk descriptions to match.
"""
import argparse, json, math, os, re, subprocess, sys, time
import xml.etree.ElementTree as ET

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(HERE, "data.js")
ROUTES = os.path.join(HERE, "routes")


def read_gpx(path):
    """Every trkpt/rtept/wpt in file order, as [lat, lon]."""
    ns = {"g": "http://www.topografix.com/GPX/1/1",
          "g0": "http://www.topografix.com/GPX/1/0"}
    root = ET.parse(path).getroot()
    pts = []
    for tag in ("trkpt", "rtept", "wpt"):
        for prefix in ("g", "g0"):
            for e in root.iterfind(".//%s:%s" % (prefix, tag), ns):
                pts.append([float(e.get("lat")), float(e.get("lon"))])
        # namespace-less GPX happens too
        for e in root.iterfind(".//" + tag):
            pts.append([float(e.get("lat")), float(e.get("lon"))])
        if pts:
            break
    # drop consecutive duplicates
    out = [p for i, p in enumerate(pts) if i == 0 or p != pts[i - 1]]
    return out


def metres(a, b):
    R = 6371000.0
    p1, p2 = math.radians(a[0]), math.radians(b[0])
    dp = math.radians(b[0] - a[0])
    dl = math.radians(b[1] - a[1])
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))


def length(pts):
    return sum(metres(pts[i], pts[i + 1]) for i in range(len(pts) - 1))


def simplify(pts, tol):
    """Douglas-Peucker with a tolerance in metres."""
    if len(pts) < 3:
        return pts
    def perp(p, a, b):
        kx = 111320 * math.cos(math.radians(a[0]))
        ky = 110540
        bx, by = (b[1] - a[1]) * kx, (b[0] - a[0]) * ky
        px, py = (p[1] - a[1]) * kx, (p[0] - a[0]) * ky
        d2 = bx * bx + by * by
        if d2 == 0:
            return math.hypot(px, py)
        t = max(0.0, min(1.0, (px * bx + py * by) / d2))
        return math.hypot(px - t * bx, py - t * by)
    dmax, idx = 0.0, 0
    for i in range(1, len(pts) - 1):
        d = perp(pts[i], pts[0], pts[-1])
        if d > dmax:
            dmax, idx = d, i
    if dmax > tol:
        return simplify(pts[:idx + 1], tol)[:-1] + simplify(pts[idx:], tol)
    return [pts[0], pts[-1]]


def fmt(pts, per_line=4):
    rows = [pts[i:i + per_line] for i in range(0, len(pts), per_line)]
    body = ",\n      ".join(",".join("[%s,%s]" % (round(p[0], 5), round(p[1], 5))
                                     for p in r) for r in rows)
    return "[\n      " + body + "\n    ]"


def replace_route(src, walk_id, literal):
    """Swap the route: [...] array belonging to one walk id."""
    m = re.search(r'id:\s*"%s"' % re.escape(walk_id), src)
    if not m:
        return None
    k = src.find("route:", m.end())
    if k == -1:
        return None
    start = src.find("[", k)
    depth, i = 0, start
    while i < len(src):
        if src[i] == "[":
            depth += 1
        elif src[i] == "]":
            depth -= 1
            if depth == 0:
                break
        i += 1
    return src[:start] + literal + src[i + 1:]


def describe(pts):
    """Named ways within ~25m of the route, in the order you meet them."""
    step = max(1, len(pts) // 40)
    seen, order = set(), []
    for p in pts[::step]:
        q = ('[out:json][timeout:25];way(around:25,%f,%f)["name"]'
             '["highway"];out tags;' % (p[0], p[1]))
        try:
            out = subprocess.run(
                ["curl", "-s", "--max-time", "40", "-G",
                 "--data-urlencode", "data=" + q,
                 "https://overpass-api.de/api/interpreter"],
                capture_output=True, text=True).stdout
            for e in json.loads(out).get("elements", []):
                n = e.get("tags", {}).get("name")
                if n and n not in seen:
                    seen.add(n)
                    order.append(n)
        except Exception:
            pass
        time.sleep(1.1)
    return order


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--describe", action="store_true",
                    help="also list the named roads and paths each route follows")
    ap.add_argument("--tolerance", type=float, default=8.0,
                    help="simplification tolerance in metres (default 8)")
    args = ap.parse_args()

    if not os.path.isdir(ROUTES):
        sys.exit("no routes/ folder at %s" % ROUTES)
    files = sorted(f for f in os.listdir(ROUTES) if f.lower().endswith(".gpx"))
    if not files:
        sys.exit("no .gpx files in routes/ - export one and name it after the "
                 "walk id, e.g. village.gpx")

    src = open(DATA, encoding="utf-8").read()
    changed = []
    for f in files:
        wid = os.path.splitext(f)[0]
        pts = read_gpx(os.path.join(ROUTES, f))
        if len(pts) < 2:
            print("%-12s SKIPPED - no track points found" % wid)
            continue
        simp = simplify(pts, args.tolerance)
        new = replace_route(src, wid, fmt(simp))
        if new is None:
            print("%-12s SKIPPED - no walk with that id in data.js" % wid)
            continue
        src = new
        changed.append((wid, pts, simp))
        print("%-12s %5.2f km  %4d pts -> %3d" %
              (wid, length(pts) / 1000, len(pts), len(simp)))

    if not changed:
        sys.exit("nothing imported")

    open(DATA, "w", encoding="utf-8").write(src)
    print("\nupdated data.js (%d walk%s)" %
          (len(changed), "" if len(changed) == 1 else "s"))

    if args.describe:
        for wid, pts, _ in changed:
            print("\n--- %s follows:" % wid)
            for n in describe(pts):
                print("    " + n)


if __name__ == "__main__":
    main()
