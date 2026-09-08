// ============================================================
//  WOODY'S WEEK  -  everything you might want to change is here.
//  Edit this file only. index.html does not need touching.
//  Coordinates are [latitude, longitude].
// ============================================================

const CONFIG = {
  // Four digits she types once. Change it.
  pin: "2026",

  // Dates Mum is here (inclusive). Messages and the Week tab run off these.
  firstDay: "2026-09-20",
  lastDay:  "2026-09-26",

  // Home. Currently set to Lane End as a placeholder: move this to the house.
  home: [53.8448, -1.7690],

  // Numbers. Leave any blank ("") and its button disappears.
  contacts: [
    { name: "Sam",   phone: "" },
    { name: "Steph", phone: "" },
    { name: "Steph's mum and dad (Crook Farm, up Glen Road)", phone: "" },
    { name: "Baildon Vets", phone: "01274 580785", note: "5 Berry Drive, BD17 7GA. Same number out of hours." },
    { name: "Browgate Pharmacy", phone: "01274 583534", note: "5 Browgate. Pharmacy First: they can treat minor things without a GP." },
    { name: "Baildon Medical Practice", phone: "01274 581979", note: "10 Newton Way. Out of hours ring 111." },
  ],
};

// ------------------------------------------------------------
//  Daily messages from Sam and Steph. One per date. Rewrite freely.
// ------------------------------------------------------------
const MESSAGES = {
  "2026-09-20": {
    title: "You made it",
    body: "Thank you for doing this, Mum. Genuinely. The house is yours for the week: eat what you like, watch what you like, and don't tidy up after us. Woody will be delighted you're here, even if he pretends otherwise for the first hour.",
  },
  "2026-09-21": {
    title: "Monday",
    body: "No plans needed today. If it's dry, the walk up to the village and a coffee is a good way to get your bearings. Four Corners is shut on Mondays, so the Malt Shovel does a decent one instead. We're thinking of you.",
  },
  "2026-09-22": {
    title: "Bin night",
    body: "Grey recycling bin goes up tonight. If it's a faff, leave it, the neighbours will sort it. You're doing us a huge favour just by being here, so don't feel you have to earn it.",
  },
  "2026-09-23": {
    title: "Cleaners today",
    body: "Cleaners come at 9, gone by about 11. Just let them in and out and put the kettle on. That's the only thing all week that needs you at a particular time, so once they've gone, the day is yours. Halfway through already.",
  },
  "2026-09-24": {
    title: "Go somewhere",
    body: "If you fancy a day out, today's the one. Bolton Abbey is 35 minutes and Woody loves the river. Or Salts Mill if the weather turns. Send us a photo, we want to see what you're up to.",
  },
  "2026-09-25": {
    title: "Nearly the weekend",
    body: "We're very aware you've spent a week with a dachshund who thinks he's in charge. Give him a squeeze from us and treat yourself to something tonight. Fish and chips, a glass of wine, whatever you fancy.",
  },
  "2026-09-26": {
    title: "Last day",
    body: "Home tomorrow. Thank you for looking after him and the house, and for being here. It meant a lot to both of us to know he was with you. Don't rush off, we'll see you soon.",
  },
  // Shown on any day outside the range above
  "default": {
    title: "Hello Mum",
    body: "This is your page for the week. Everything you need is in the tabs below.",
  },
};

// ------------------------------------------------------------
//  Week tab. Dated things and everyday things.
// ------------------------------------------------------------
const WEEK_EVENTS = [
  { date: "2026-09-20", time: "",        what: "You arrive. Sam and Steph are away until Sunday 27th." },
  { date: "2026-09-22", time: "Evening", what: "Grey recycling bin out. Neighbours will bring it back down." },
  { date: "2026-09-23", time: "9 to 11", what: "Cleaners. Let them in and out. Nothing else to do." },
  { date: "2026-09-26", time: "",        what: "Last full day." },
  { date: "2026-09-27", time: "",        what: "Sam and Steph home." },
];

const EVERY_DAY = [
  { time: "Morning",  what: "Back door open for Woody, then breakfast: 4 level scoops in the maze bowl." },
  { time: "12:00",    what: "A chew for Woody (left cupboard, dining room)." },
  { time: "17:00",    what: "Tea: 4 level scoops in the maze bowl." },
  { time: "Bedtime",  what: "Toilet trip, collar off, 'on your bed' with a treat, light off, door shut." },
  { time: "Any time", what: "Gardener may turn up. He knows what he's doing, leave him to it." },
  { time: "Every other day", what: "Plants: a splash of water for the ones that look thirsty." },
];

// ------------------------------------------------------------
//  Woody tab
// ------------------------------------------------------------
const WOODY = [
  { h: "Food",     p: "4 level scoops from the bin into his maze bowl, morning after his first toilet trip and again at 17:00. He will cry for it early. Ignore him, he needs to learn patience." },
  { h: "Chew",     p: "12:00, from the left cupboard in the dining room. A beef chew or similar." },
  { h: "Water",    p: "Normal tap water. Check the bowl a couple of times a day." },
  { h: "Leaving him", p: "If you're going out for more than an hour, walk him first. Lock the back door, shut the curtains, lights off if it's dark. Take a treat from the bag on the counter into the lounge, say 'on your bed', put the treat on the bed with him. Switch on the camera (on the fireplace), light off, door shut. When you're back, open the back door for him." },
  { h: "Bedtime",  p: "Any time from about 9. Back door open for a last wee, then the same 'on your bed' routine. Collar off before bed. If he cries in the night, ignore him." },
  { h: "Walks",    p: "Extendy lead for walks, short lead near roads and in the car. Both in the cupboard. Poo bags by the door. He's fine off the lead on the moor and in the woods if you're happy with him." },
  { h: "In the car", p: "Collar and short lead on and he's fine. If you ever need the vet, they're two minutes away, number below." },
  { h: "Barking",  p: "He barks when he goes out the back. It's mostly announcement, not alarm. Ignore it." },
];

// ------------------------------------------------------------
//  Walks. type: "short" (under 30 min), "medium" (30 to 60), "long" (over an hour), "drive" (day out)
//  route: hand-plotted points. start/end used for the map pins.
//  The first walk in the list with suggestFrom: true on a given day is "today's walk".
// ------------------------------------------------------------
const WALKS = [
  {
    id: "village",
    name: "Up to the village",
    type: "short",
    time: "25 min each way",
    from: "Home",
    summary: "The everyday one. Home to the village by way of Lane End and up Bank Walk, coffee at the top.",
    detail: "Out of the house to Lane End, then up Bank Walk. It climbs, but it's short and the view back over Shipley opens up as you go. You come out on Browgate by the pharmacy; the Co-op and Four Corners are round the corner on Northgate. Come back the same way or wander down Browgate for a change.",
    woody: "Extendy lead on Bank Walk, short lead once you're in the village.",
    parking: "No need, it starts at the door.",
    route: [[53.8448,-1.7690],[53.8455,-1.7697],[53.8468,-1.7692],[53.8481,-1.7684],[53.8494,-1.7678],[53.8508,-1.7671],[53.8520,-1.7666],[53.8527,-1.7664]],
    end: "Baildon village",
  },
  {
    id: "trig",
    name: "The moor and the trig point",
    type: "long",
    time: "About 1.5 hours from the village",
    from: "Baildon village",
    summary: "Up Northgate, past the golf club and onto the moor. The trig point is the top of everything round here.",
    detail: "From the village take Northgate then Moorgate up past the golf club. The road turns to track and then open moor. Head for the highest point; the trig pillar is obvious once you're up. On a clear day you can see across to Ilkley Moor and down into three valleys. Come back the same way, or drop down towards Glen Road and Crook Farm for a loop with a coffee at the Old Glen House.",
    woody: "Fine off the lead on the moor. Watch for golfers on the way up and keep him close on the road stretch.",
    parking: "Drive up Glen Road past Crook Farm to the moor car park on Bingley Road (the big lay-by by the cattle grid). From there the trig is 20 minutes up, so the whole thing is under an hour.",
    route: [[53.8527,-1.7664],[53.8545,-1.7685],[53.8560,-1.7700],[53.8583,-1.7724],[53.8598,-1.7752],[53.8612,-1.7780],[53.8625,-1.7798],[53.8632,-1.7807]],
    end: "Baildon Moor trig point",
  },
  {
    id: "tongpark",
    name: "Rugby club, Willy Wood and Tong Park",
    type: "long",
    time: "About 2 hours",
    from: "Baildon village",
    summary: "A proper loop out east: rugby club, down through Willy Wood, past the dam at Tong Park, Esholt cricket ground and back along Station Road.",
    detail: "From the village head out along Jenny Lane to the rugby club. Past the pitches the path drops into Willy Wood, follows the beck down to Tong Park and its dam, then on to Esholt cricket club. From there pick up Station Road and follow it back west past Baildon station and up into the village. Flat-ish apart from the climb home.",
    woody: "Off the lead in the wood, on it around the cricket ground and along Station Road.",
    parking: "Park at Baildon station (free) and do the loop from there: Station Road east to Esholt first, then back over Tong Park and the rugby club. Cuts out the climb into the village.",
    route: [[53.8527,-1.7664],[53.8540,-1.7630],[53.8550,-1.7605],[53.8570,-1.7565],[53.8585,-1.7530],[53.8598,-1.7500],[53.8590,-1.7460],[53.8578,-1.7410],[53.8572,-1.7380],[53.8550,-1.7420],[53.8530,-1.7480],[53.8505,-1.7540],[53.8515,-1.7600],[53.8527,-1.7664]],
    end: "Back to the village",
  },
  {
    id: "ilkley",
    name: "Over the moor to Ilkley",
    type: "long",
    time: "Half a day, one way, train home",
    from: "Baildon village",
    summary: "The big one. Over Baildon Moor, past Faweather, across Hawksworth and Burley Moor and down into Ilkley. Train back to Baildon.",
    detail: "Same start as the trig walk, but keep going north off the top of Baildon Moor towards Faweather Grange. The track runs on across Hawksworth Moor, past the reservoir, and onto Burley and Ilkley Moor. Drop down into Ilkley by White Wells. Betty's or the Riverside for lunch, then the train from Ilkley station straight back to Baildon (the Bradford Forster Square train, no change). Only on a good day, and take water for both of you.",
    woody: "Sheep on the moor once you're past Faweather. Lead on when they're about.",
    parking: "Leave the car at Baildon station, train to Ilkley and walk it in reverse, finishing back at the car. Or drive to Ilkley, walk out over the moor as far as you like and turn round.",
    route: [[53.8527,-1.7664],[53.8560,-1.7700],[53.8583,-1.7724],[53.8632,-1.7807],[53.8680,-1.7760],[53.8710,-1.7700],[53.8770,-1.7760],[53.8830,-1.7850],[53.8920,-1.7920],[53.9050,-1.8000],[53.9170,-1.8150],[53.9195,-1.8265],[53.9250,-1.8225]],
    end: "Ilkley station",
  },
  {
    id: "bank",
    name: "Cliffe Lane park up the bank to the Glen",
    type: "medium",
    time: "45 min each way",
    from: "Cliffe Lane park",
    summary: "From the little park on Cliffe Lane, up the bank and along the top to Shipley Glen.",
    detail: "Start at the park on Cliffe Lane. Climb the bank (steep but short) and follow the path west along the top with the crags below you. It runs on across Bracken Hall Green to the Old Glen House at the Glen. Coffee or a pint there, then back the same way, or carry on into the Glen walk below.",
    woody: "Off the lead along the top once you're clear of the park.",
    parking: "Street parking on Cliffe Lane by the park.",
    route: [[53.8455,-1.7770],[53.8462,-1.7785],[53.8458,-1.7805],[53.8448,-1.7825],[53.8440,-1.7845],[53.8432,-1.7865],[53.8425,-1.7880]],
    end: "Old Glen House",
  },
  {
    id: "glen",
    name: "Shipley Glen and the wood",
    type: "medium",
    time: "45 min to an hour",
    from: "Old Glen House (drive up Glen Road, park by the pub)",
    summary: "Along the top of the Glen among the boulders, then down through the wood to the beck at the bottom.",
    detail: "Either drive up Glen Road and park by the Old Glen House, or arrive on foot from the walk above. Follow the Glen along the top: it's rocky, open and popular with dogs. When you've had enough, take one of the paths down through the wood to Loadpit Beck at the bottom, near the foot of the tramway. Climb back up, or turn it into the Saltaire walk.",
    woody: "Off the lead. He'll disappear into the bracken and reappear.",
    parking: "Park by the Old Glen House at the top of Glen Road.",
    route: [[53.8425,-1.7880],[53.8412,-1.7870],[53.8400,-1.7862],[53.8390,-1.7855],[53.8385,-1.7840],[53.8375,-1.7835],[53.8365,-1.7833]],
    end: "Bottom of the Glen, by the tramway",
  },
  {
    id: "saltaire",
    name: "Down the tramway to Saltaire",
    type: "medium",
    time: "An hour, or less with the tram",
    from: "West end of the bank",
    summary: "From the far end of Baildon Bank, down the Glen tramway to Saltaire. Train home or walk back up Baildon Green.",
    detail: "Follow the bank west to its end, then take the path down to the top of the Shipley Glen Tramway. If it's running (weekends and school holidays, usually) ride it down; otherwise the path beside it. At the bottom cross Roberts Park and the river into Saltaire: Salts Mill, cafes, the canal. To get home either walk back up through Baildon Green, or take the train from Saltaire to Shipley and change for Baildon.",
    woody: "Dogs go on the tram. Lead on in Saltaire.",
    parking: "Park in Saltaire (Caroline Street car park) and do it upwards: tram or path up the Glen, along the bank and back down through Baildon Green.",
    route: [[53.8455,-1.7770],[53.8445,-1.7795],[53.8420,-1.7815],[53.8400,-1.7845],[53.8388,-1.7862],[53.8365,-1.7833],[53.8375,-1.7880],[53.8386,-1.7900]],
    end: "Saltaire station",
  },
  {
    id: "dell",
    name: "Ferniehurst Dell",
    type: "short",
    time: "20 min",
    from: "Ferniehurst",
    summary: "The quick one for a wet evening or a late wee. Round the dell and back.",
    detail: "A small wooded dell tucked behind the houses on Ferniehurst. A loop path runs round it. Nothing to it, which is the point.",
    woody: "Off the lead once you're in.",
    parking: "Street parking on Ferniehurst.",
    route: [[53.8480,-1.7580],[53.8472,-1.7588],[53.8465,-1.7600],[53.8460,-1.7612],[53.8468,-1.7620],[53.8476,-1.7605],[53.8480,-1.7580]],
    end: "Back where you started",
  },
  {
    id: "canal",
    name: "Roberts Park and the canal",
    type: "medium",
    time: "45 min, flat",
    from: "Roberts Park, Saltaire (drive or tram)",
    summary: "Flat and easy: the park, then along the Leeds and Liverpool canal towpath towards Hirst Wood and back.",
    detail: "Park by Roberts Park, do a lap of the park, then cross to the canal and head west along the towpath. Hirst Wood is a mile along and worth going into. Turn round whenever you like. Good for a day when your legs have had enough of hills.",
    woody: "Lead on along the towpath (cyclists), off in Hirst Wood.",
    parking: "Free parking on Higher Coach Road by Roberts Park.",
    route: [[53.8378,-1.7885],[53.8385,-1.7910],[53.8390,-1.7935],[53.8395,-1.7970],[53.8400,-1.8010],[53.8405,-1.8050]],
    end: "Hirst Wood",
  },
  // ---- Day outs, all within about 1.5 hours ----
  {
    id: "bolton",
    name: "Bolton Abbey",
    type: "drive",
    time: "35 min drive",
    from: "Bolton Abbey, BD23 6EX",
    summary: "Riverside paths, the stepping stones, the Strid and the priory ruins. Woody's kind of place.",
    detail: "Park at the main car park (pay on entry, covers the estate). Walk up the river to the Strid and back through the woods, about an hour and a half, or just potter by the priory and the stepping stones. Cafes at the Cavendish Pavilion and the village.",
    woody: "Lead on near the river; the Strid is genuinely dangerous water.",
    route: [[53.9840,-1.8880]],
    end: "Bolton Abbey",
  },
  {
    id: "brimham",
    name: "Brimham Rocks",
    type: "drive",
    time: "About an hour's drive",
    from: "Brimham Rocks, HG3 4DW (National Trust)",
    summary: "Enormous weather-carved rocks on a moortop with paths all around them. Easy walking, big views.",
    detail: "National Trust car park, a few pounds if you're not a member. Paths wander between the rocks and out to the edge for the view over Nidderdale. A couple of hours is plenty. Kiosk cafe at the top.",
    woody: "Lead on, it's the rule there and there are drops.",
    route: [[54.0760,-1.6830]],
    end: "Brimham Rocks",
  },
  {
    id: "grassington",
    name: "Grassington and Linton Falls",
    type: "drive",
    time: "About 55 min drive",
    from: "Grassington, BD23 5AB",
    summary: "A Dales village with a cobbled square, then the short walk down to Linton Falls on the Wharfe.",
    detail: "Park in the village car park. Walk down Sedber Lane to Linton Falls (ten minutes), cross the footbridge and follow the river a while, then back up for lunch. Plenty of dog-friendly pubs and tea rooms round the square.",
    woody: "Off the lead by the river, on in the village.",
    route: [[54.0715,-2.0035]],
    end: "Grassington",
  },
  {
    id: "ingleton",
    name: "Ingleton Waterfalls Trail",
    type: "drive",
    time: "About 1 hr 15 drive",
    from: "Ingleton, LA6 3ET",
    summary: "The full day out: a 4.5 mile circuit past a string of waterfalls in two wooded gorges. Paid entry, worth every penny.",
    detail: "Entry is about fifteen pounds and includes parking. The trail is well made but has a lot of steps; allow three hours with stops. Take the anticlockwise route (Pecca Falls first). Cafe at the top and the bottom.",
    woody: "Lead on the whole way, it's steep and busy.",
    route: [[54.1547,-2.4735]],
    end: "Ingleton",
  },
  {
    id: "haworth",
    name: "Haworth",
    type: "drive",
    time: "30 min drive",
    from: "Haworth, BD22 8DR",
    summary: "The Brontë village. Steep cobbled main street, the parsonage, and moor walks out the back to the Brontë waterfall.",
    detail: "Park at the top by the parsonage. Wander the main street, then if you fancy it the path out to the Brontë waterfall from the church is about an hour there and back across the moor. The steam railway runs at weekends.",
    woody: "Off the lead on the moor path, on in the village.",
    route: [[53.8300,-1.9560]],
    end: "Haworth",
  },
];

// ------------------------------------------------------------
//  Places on the map. group: "need" (shops, fuel, vet) or "nice" (for you)
// ------------------------------------------------------------
const PLACES = [
  { name: "Co-op", group: "need", at: [53.8538,-1.7670], note: "25 Northgate. 7am to 10pm, Sunday 10 to 4." },
  { name: "Four Corners coffee", group: "nice", at: [53.8536,-1.7669], note: "20 Northgate. Tue to Sat 8:30 to 3, Sun 9:30 to 2, closed Monday. Dogs welcome, the best coffee in Baildon." },
  { name: "Baildon Vets", group: "need", at: [53.8458,-1.7712], note: "5 Berry Drive. 01274 580785." },
  { name: "Browgate Pharmacy", group: "need", at: [53.8527,-1.7664], note: "5 Browgate, in the village. 01274 583534." },
  { name: "Baildon Medical Practice", group: "need", at: [53.8508,-1.7570], note: "10 Newton Way. 01274 581979." },
  { name: "Esso, Otley Road", group: "need", at: [53.8418,-1.7640], note: "Charlestown, at the bottom of the hill. Open 24 hours." },
  { name: "BP, Otley Road (Shipley)", group: "need", at: [53.8375,-1.7660], note: "Over Baildon Bridge, 24 hours, Spar shop." },
  { name: "Baildon station", group: "need", at: [53.8500,-1.7540], note: "Trains to Ilkley one way, Shipley and Bradford the other." },
  { name: "Crook Farm", group: "need", at: [53.8500,-1.7855], note: "Steph's mum and dad, up Glen Road." },
  { name: "Malt Shovel", group: "nice", at: [53.8535,-1.7672], note: "Pub in the village on Northgate. Food, dogs fine." },
  { name: "Old Glen House", group: "nice", at: [53.8425,-1.7880], note: "Pub at the top of the Glen. Dogs welcome, good garden." },
  { name: "Salts Mill", group: "nice", at: [53.8378,-1.7920], note: "Saltaire. Hockney gallery, a very good bookshop and cafe. Free." },
  { name: "Roberts Park", group: "nice", at: [53.8378,-1.7885], note: "Saltaire. Riverside park, bandstand, cafe. Flat." },
  { name: "Ilkley", group: "nice", at: [53.9250,-1.8225], note: "Twenty minutes on the train from Baildon. Betty's, the Grove, the moor." },
];
