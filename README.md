# Woody's week

A one-page site for Mum while she's looking after Woody, 20 to 26 September.

## Put it online (GitHub Pages, about five minutes)

1. Create a new repository on github.com called `woody` (public, empty).
2. Upload these four files to it: `index.html`, `data.js`, `woody.jpg`, `README.md`.
3. Repository Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
4. After a minute the site is at `https://<your-username>.github.io/woody/`.
5. Send her the link. On iPhone: open in Safari, share button, "Add to Home Screen". It then opens like an app with Woody's face as the icon.

Any time you change `data.js`, upload it again over the top and the site updates within a minute.

## Before you send it

Everything editable is in `data.js`, top to bottom:

- `pin` - change it from 2026.
- `home` - currently set to Lane End as a placeholder. Put the house's coordinates in (right-click the house in Google Maps, the numbers at the top of the menu are lat, lng).
- `contacts` - your and Steph's numbers and Steph's parents' are blank. Fill them in or leave blank; blank ones don't show.
- `MESSAGES` - one per day, in your voice not mine. Rewrite them.
- `WALKS` - the nine local walks are your own plotaroute routes, in `routes/`.
  To change one, redraw it, drop the GPX in there and see `routes/README.md`.
  Two walks (`saltaire`, `ilkley`) carry a `back` route as well: that's the way
  home, drawn on the map dotted, and it never gets suggested as a walk itself.
- `WALKS` - every walk has a `fromHome` line saying how you get to the start from the house, on foot or in the car. Those times are guesses made off the placeholder `home` above, so once you've moved `home` to the real house, read them through and correct anything that's out. The `route` points are plotted by hand from your descriptions on an OpenStreetMap base, not from AllTrails. Check them on the Map tab; if one strays, edit the numbers (each is `[lat, lng]`). The Cliffe Lane park, Ferniehurst Dell and vets pins are the ones I'm least sure of.
- `PLACES` - shops, fuel, vet, and the "for you" places. Add or remove freely.

The PIN is a deterrent, not security: don't put the alarm code or WiFi password in the site.

## What's in it

- Today: her message for the day, anything happening today, a suggested walk (it moves on one every time she opens the page, so she isn't shown the same one all week), and tap-to-call numbers.
- Walks: nine local walks and five days out, filterable, each with directions to the start.
- Map: hand-drawn style map of the places: shops and vet, treats, and the
  landmarks the walks pass. Toggle those at the top. Walks aren't drawn on it
  by default (eleven routes at once was a thicket of start pins); pick one in
  the Walks tab and "See it on the map" puts that one on, with Back to clear.
  "Days out" swaps to the day trips on their own.
- Woody: the house-specific bits from the user guide, nothing else.
- Week: day by day, with today highlighted, plus the every-day routine.

Fonts come from Google Fonts and the map base from OpenStreetMap, so it needs internet, but so does she.
