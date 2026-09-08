# Drawing the walks yourself

The routes in `data.js` are currently machine-routed: real footpaths, but the
computer's choice of them, not yours. If a route is wrong, draw it properly and
drop the file in here.

## Which tool

**plotaroute.com** is the one to use. Free, no account needed to start, and its
auto-plot follows UK public footpaths rather than guessing. Draw the route, then
Save > Download > GPX.

Others that work:

- **Strava** (strava.com/routes/new) - good if you already use it. Its snapping
  follows where people actually walk, which round Baildon is reliable. Export
  is Ctrl/Cmd-E, or the three dots > Export GPX.
- **Komoot** - free planner, strong on footpaths, GPX export on the free tier.
- **OS Maps** - the definitive rights of way, and the best data of the lot, but
  it needs a subscription.
- **AllTrails** - fine for finding routes, but GPX export is behind AllTrails+.

**Or just walk it.** Record the walk on your phone with Strava or OS Maps and
export that. That's the most accurate option available, because it's literally
the path you took, and you'd be walking Woody anyway.

## The nine to draw

Only the local walks need GPX files. The five days out (Bolton Abbey, Brimham,
Grassington, Ingleton, Haworth) are single pins, not routes, so leave those.

Name each file after the walk's `id`. Draw them in the direction you'd walk
them: the first point becomes the start pin, the last becomes the end pin.

Home is the Baildon Road / Sandals Road bus stop, `53.84852, -1.76682`.

| File | Walk | Start | End | Mine is |
| --- | --- | --- | --- | --- |
| `village.gpx` | Up to the village | Home | Baildon village | 0.9 km |
| `trig.gpx` | The moor and the trig point | Baildon village | Moor trig point | 1.6 km |
| `tongpark.gpx` | Rugby club, Willy Wood and Tong Park | Baildon village | Loop back to the village | 4.8 km |
| `ilkley.gpx` | Over the moor to Ilkley | Baildon village | Ilkley station | 12.4 km |
| `bank.gpx` | Cliffe Avenue Park and along the bank | Cliffe Avenue Park | Bracken Hall Green | 3.1 km |
| `glen.gpx` | Shipley Glen and the wood | Bracken Hall Green | Bottom of the Glen, by the tramway | 1.3 km |
| `saltaire.gpx` | Down the tramway to Saltaire | West end of Baildon Bank | Saltaire station | 3.1 km |
| `dell.gpx` | Ferniehurst Dell | Ferniehurst Dell | Loop, back where you started | 0.7 km |
| `canal.gpx` | Roberts Park and the canal | Roberts Park, Saltaire | Hirst Wood | 1.6 km |

The distances are what the router picked, for comparison. If yours comes out
very different, yours is the right one.

Two are loops (`tongpark`, `dell`) so they should finish where they started.
`saltaire` and `ilkley` are one-way with a train home, so don't draw the return.

## Importing

```bash
python3 tools/import-gpx.py
```

It replaces the `route:` array for each walk it finds a file for and leaves the
rest alone, so you can do them a few at a time. It thins the points down (a
recorded track has thousands; the map needs tens) without moving the line off
the path.

To also get the roads and paths each route actually passes along:

```bash
python3 tools/import-gpx.py --describe
```

That prints a list per walk. Hand it to Claude and it can rewrite each walk's
description, distance and timing to match the route you actually drew, instead
of the one it guessed.
