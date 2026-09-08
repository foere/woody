// ============================================================
//  WOODY'S WEEK  -  everything you might want to change is here.
//  Edit this file only. index.html does not need touching.
//  Coordinates are [latitude, longitude].
//
//  Every coordinate below comes from OpenStreetMap, and the walk
//  routes are real footpath routing, not drawn by hand. If you move a
//  pin, take the numbers from OpenStreetMap or Google Maps rather than
//  guessing, or it will drift again.
// ============================================================

const CONFIG = {
  // Four digits she types once.
  pin: "1992",

  // Dates Mum is here (inclusive). Messages and the Week tab run off these.
  firstDay: "2026-09-20",
  lastDay:  "2026-09-26",

  // Home: the Baildon Road / Sandals Road bus stop.
  home: [53.84852, -1.76682],

  // Numbers she wouldn't already have. Leave any blank ("") and its button
  // disappears. Ours aren't here on purpose: she has them.
  contacts: [
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
    body: "No plans needed today. If it's dry, the walk up to the village and a coffee is a good way to get your bearings. Four Corners is shut on Mondays, but the Co-op is open till ten if you need anything. We're thinking of you.",
  },
  "2026-09-22": {
    title: "Bin night",
    body: "Grey recycling bin goes up tonight. If it's a faff, leave it, the neighbours will sort it. You're doing us a huge favour just by being here, so don't feel you have to earn it.",
  },
  "2026-09-23": {
    title: "Cleaners today",
    body: "Cleaners come at 9, gone by about 11. Just let them in and out and put the kettle on. Once they've gone the day is yours. Halfway through already.",
  },
  "2026-09-24": {
    title: "Dog bus day",
    body: "Today's the fun one. Woody's Dog Bus picks up at 10:40 on Berry Drive, in the motorbike showroom car park. Drop him off, then drive up to the Bark Park and join in: that's the whole point of it, and he loves it. Drive back with him afterwards. You can take him and meet them there instead if you'd rather, but it's less fun that way. We'll give you a map for the Bark Park before we go.",
  },
  "2026-09-25": {
    title: "Nearly the weekend",
    body: "We're very aware you've spent a week with a dachshund who thinks he's in charge. Give him a squeeze from us and treat yourself to something tonight. Fish and chips, something rubbish on the telly, whatever you fancy.",
  },
  "2026-09-26": {
    title: "Last day",
    body: "We're back today. Thank you for looking after him and the house, and for being here. It meant a lot to both of us to know he was with you. Don't rush off, we'll see you very soon.",
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
  { date: "2026-09-20", time: "",        what: "You arrive. Sam and Steph are away until Saturday the 26th." },
  { date: "2026-09-22", time: "Evening", what: "Grey recycling bin out. Neighbours will bring it back down." },
  { date: "2026-09-23", time: "9 to 11", what: "Cleaners. Let them in and out. Nothing else to do." },
  { date: "2026-09-24", time: "10:40",   what: "Woody's Dog Bus. Drop off on Berry Drive, in the motorbike showroom car park. Then drive up to the Bark Park and join in, and bring him home afterwards. Map for the Bark Park to follow." },
  { date: "2026-09-25", time: "",        what: "Last full day." },
  { date: "2026-09-26", time: "",        what: "Sam and Steph home." },
];

const EVERY_DAY = [
  { time: "Morning",  what: "Back door open for Woody, then breakfast: 4 level scoops in the maze bowl." },
  { time: "12:00",    what: "A chew for Woody (left cupboard, dining room)." },
  { time: "18:00",    what: "Tea: 4 level scoops in the maze bowl." },
  { time: "Bedtime",  what: "Toilet trip, collar off, 'on your bed' with a treat, light off, door shut." },
  { time: "Any time", what: "Gardener may turn up. He knows what he's doing, leave him to it." },
  { time: "Every other day", what: "Plants: a splash of water for the ones that look thirsty." },
];

// ------------------------------------------------------------
//  Woody tab
// ------------------------------------------------------------
const WOODY = [
  { h: "Food",     p: "4 level scoops from the bin into his maze bowl, morning after his first toilet trip and again at 18:00. He will cry for it early. Ignore him, he needs to learn patience." },
  { h: "Chew",     p: "12:00, from the left cupboard in the dining room. A beef chew or similar." },
  { h: "Water",    p: "Normal tap water. Check the bowl a couple of times a day." },
  { h: "Leaving him", p: "If you're going out for more than an hour, walk him first. Lock the back door, shut the curtains, lights off if it's dark. Take a treat from the bag on the counter into the lounge, say 'on your bed', put the treat on the bed with him. Switch on the camera (on the fireplace), light off, door shut. When you're back, open the back door for him." },
  { h: "Bedtime",  p: "Any time from about 9. Back door open for a last wee, then the same 'on your bed' routine. Collar off before bed. If he cries in the night, ignore him (or let him stay on your bed I SUPPOSE)." },
  { h: "Walks",    p: "Extendy lead for walks where you're not planning to let him off, short lead otherwise. Both in the cupboard. Poo bags by the door. He's fine off the lead on the moor and in the woods etc." },
  { h: "Dog bus",  p: "Thursday, 10:40, Berry Drive in the motorbike showroom car park. Collar and short lead. He knows the drill better than you will." },
  { h: "In the car", p: "Collar and short lead on and he's fine. If you ever need the vet, they're on Berry Drive, five minutes away, number below." },
  { h: "Barking",  p: "He barks when he goes out the back. It's mostly announcement, not alarm. Ignore it." },
];

// ------------------------------------------------------------
//  Walks. type: "short" (under 30 min), "medium" (30 to 60), "long" (over an hour), "drive" (day out)
//  route: real walking routes from OpenStreetMap. Times are walking only,
//  one way unless it says otherwise, and don't count stops or dawdling.
// ------------------------------------------------------------
const WALKS = [
  {
    id: "village",
    name: "Up to the village",
    type: "short",
    time: "About 15 min each way",
    from: "Home",
    fromHome: "Out of the front door and go, this is the one that starts at home. Up Baildon Road and Browgate and you're in the village.",
    summary: "The everyday one. Home, up the hill to Browgate and the village, coffee at the top.",
    detail: "Straight up Baildon Road from the house and on into Browgate. It climbs the whole way, but it's short. You come out by the pharmacy on Browgate; the Co-op and Four Corners are on Northgate just past it. Come back the same way, or wander down through the village for a change of scene.",
    woody: "Extendy lead on the way up, short lead once you're among the shops.",
    parking: "No need, it starts at the door.",
    route: [
      [53.84855,-1.76674],[53.84975,-1.76791],[53.85017,-1.76796],[53.85058,-1.76763],
      [53.85145,-1.76617],[53.85242,-1.76615],[53.8525,-1.76586],[53.85321,-1.76577],
      [53.85395,-1.7661],[53.85404,-1.76557],[53.85484,-1.7658],[53.85493,-1.76523],
      [53.85442,-1.76505]
    ],
    end: "Baildon village",
  },
  {
    id: "trig",
    name: "The moor and the trig point",
    type: "medium",
    time: "About 25 min up from the village, an hour and a half all in from home",
    from: "Baildon village",
    fromHome: "Two ways. On foot from the door, do the village walk first and carry straight on, which makes the whole thing about an hour and a half. Or drive up Northgate and Moorgate to the moor car park, five minutes, and the trig point is twenty minutes up from there.",
    summary: "Up Northgate, past the golf club and onto the moor. The trig point is the top of everything round here.",
    detail: "From the village take Northgate then Moorgate up past the golf club. The road turns to track and then open moor. Head for the highest point; the trig pillar is obvious once you're up. On a clear day you can see across to Ilkley Moor and down into three valleys. Come back the same way, or drop down towards Glen Road and Crook Farm to make a loop of it.",
    woody: "Fine off the lead on the moor. Watch for golfers on the way up and keep him close on the road stretch.",
    parking: "Drive up Glen Road past Crook Farm to the moor car park on Bingley Road, by the cattle grid.",
    route: [
      [53.85442,-1.76505],[53.85493,-1.76523],[53.85473,-1.76657],[53.85515,-1.76705],
      [53.85508,-1.76772],[53.85615,-1.76957],[53.85686,-1.77027],[53.85707,-1.77097],
      [53.85702,-1.77316],[53.85652,-1.7765],[53.85681,-1.78052],[53.85639,-1.78473],
      [53.85683,-1.78644],[53.85686,-1.78672],[53.8567,-1.78675]
    ],
    end: "Baildon Moor trig point",
  },
  {
    id: "tongpark",
    name: "Rugby club, Willy Wood and Tong Park",
    type: "long",
    time: "About an hour and ten for the loop",
    from: "Baildon village",
    fromHome: "Walk up to the village first (15 minutes, as above) and start the loop from there. Or drive down to Baildon station, five minutes, park free and do the loop the other way round, which saves you the climb home at the end.",
    summary: "A proper loop out east: rugby club, down through Willy Wood, past the dam at Tong Park, and back along Station Road.",
    detail: "From the village head out along Jenny Lane to the rugby club. Past the pitches the path drops into Willy Wood, follows the beck down to Tong Park and its dam, then swings back on Station Road, past Baildon station and up into the village. Flat-ish apart from the climb home.",
    woody: "Off the lead in the wood, on it around the dam and along Station Road.",
    parking: "Park at Baildon station (free) and do the loop from there.",
    route: [
      [53.85442,-1.76505],[53.85493,-1.76523],[53.85552,-1.76092],[53.85525,-1.76255],
      [53.85361,-1.76232],[53.8531,-1.75569],[53.85395,-1.75518],[53.85425,-1.75604],
      [53.8558,-1.75521],[53.85608,-1.75533],[53.85729,-1.75382],[53.8577,-1.75245],
      [53.85819,-1.75167],[53.85889,-1.75168],[53.85911,-1.75142],[53.8586,-1.75109],
      [53.85829,-1.75046],[53.85837,-1.74975],[53.85783,-1.74906],[53.85761,-1.74721],
      [53.85719,-1.74626],[53.85588,-1.74454],[53.85505,-1.74488],[53.8547,-1.74588],
      [53.85291,-1.74787],[53.85213,-1.74986],[53.85141,-1.75031],[53.85164,-1.75083],
      [53.85154,-1.75146],[53.8506,-1.7528],[53.85076,-1.75309],[53.84997,-1.75417],
      [53.85026,-1.75394],[53.85039,-1.75513],[53.85018,-1.7569],[53.85091,-1.7573],
      [53.85072,-1.75884],[53.85248,-1.75979],[53.85265,-1.76125],[53.85321,-1.76199],
      [53.85224,-1.76328],[53.85257,-1.76404],[53.85129,-1.76639]
    ],
    end: "Back to the village",
  },
  {
    id: "ilkley",
    name: "Over the moor to Ilkley",
    type: "long",
    time: "Three hours of walking, so half a day with stops. Train home.",
    from: "Baildon village",
    fromHome: "Walk up to the village and on over the moor, which is the whole point of it. If you'd rather not, drive to Baildon station (five minutes), take the train to Ilkley and walk back over the moor to the car.",
    summary: "The big one. Over Baildon Moor, across Hawksworth and Burley Moor and down into Ilkley. Train back to Baildon.",
    detail: "Same start as the trig walk, but keep going north off the top of Baildon Moor. The track runs on across Hawksworth Moor and onto Burley and Ilkley Moor, then drops into Ilkley. Betty's or one of the cafes by the river for lunch, then the train from Ilkley station straight back to Baildon, no change. Thirteen kilometres, so only on a good day, and take water for both of you.",
    woody: "Sheep on the moor once you're past the top. Lead on when they're about.",
    parking: "Leave the car at Baildon station, train to Ilkley and walk it in reverse, finishing back at the car.",
    route: [
      [53.85442,-1.76505],[53.85493,-1.76523],[53.85473,-1.76657],[53.85515,-1.76705],
      [53.85508,-1.76772],[53.85707,-1.77097],[53.85652,-1.7765],[53.85681,-1.78052],
      [53.85639,-1.78473],[53.8567,-1.78675],[53.85805,-1.78479],[53.85838,-1.78546],
      [53.862,-1.785],[53.8653,-1.79098],[53.86678,-1.79065],[53.86706,-1.79127],
      [53.86722,-1.78966],[53.86796,-1.78822],[53.86784,-1.78758],[53.86929,-1.7872],
      [53.86933,-1.78624],[53.87066,-1.78397],[53.87217,-1.78345],[53.87281,-1.78455],
      [53.87352,-1.78441],[53.87448,-1.78543],[53.87478,-1.78451],[53.87619,-1.78416],
      [53.87663,-1.78246],[53.87933,-1.78135],[53.88128,-1.77858],[53.8814,-1.7773],
      [53.88298,-1.77712],[53.88327,-1.77842],[53.88222,-1.78267],[53.88398,-1.78797],
      [53.88388,-1.79096],[53.88541,-1.79522],[53.88544,-1.799],[53.88607,-1.8005],
      [53.89793,-1.79428],[53.89952,-1.79443],[53.90028,-1.79615],[53.90142,-1.7972],
      [53.90235,-1.79687],[53.9031,-1.7993],[53.90463,-1.8008],[53.90787,-1.79865],
      [53.90886,-1.7987],[53.91287,-1.80339],[53.91377,-1.80578],[53.91445,-1.80585],
      [53.91631,-1.8079],[53.91673,-1.80808],[53.91699,-1.80752],[53.9182,-1.81023],
      [53.91907,-1.8099],[53.9192,-1.81114],[53.9246,-1.82067],[53.92475,-1.82186],
      [53.92475,-1.8213]
    ],
    end: "Ilkley station",
  },
  {
    id: "bank",
    name: "Cliffe Avenue Park and along the bank",
    type: "medium",
    time: "About 45 min each way",
    from: "Cliffe Avenue Park",
    fromHome: "Ten minutes on foot, down Baildon Road and along Cliffe Avenue to the park. Not worth taking the car.",
    summary: "From the park on Cliffe Avenue, up onto Baildon Bank and west along the top to Bracken Hall Green.",
    detail: "Start at Cliffe Avenue Park. Climb onto the bank (steep but short) and follow the path west along the top with the crags below you. It runs on to Bracken Hall Green, where there's a countryside centre and a lot of open ground. Back the same way, or carry on into the Glen walk below.",
    woody: "Off the lead along the top once you're clear of the park.",
    parking: "Street parking on Cliffe Avenue by the park.",
    route: [
      [53.84731,-1.77097],[53.84903,-1.76988],[53.84865,-1.77127],[53.84807,-1.77238],
      [53.84637,-1.77415],[53.84625,-1.77457],[53.84647,-1.77492],[53.84678,-1.77449],
      [53.846,-1.77555],[53.84557,-1.77768],[53.84574,-1.77984],[53.8456,-1.78222],
      [53.84586,-1.78254],[53.84718,-1.78257],[53.84718,-1.78431],[53.84763,-1.78722],
      [53.84746,-1.79475],[53.84703,-1.79695],[53.84624,-1.79898],[53.84679,-1.80078],
      [53.84664,-1.80105],[53.84692,-1.80199],[53.84801,-1.80407],[53.84874,-1.80476]
    ],
    end: "Bracken Hall Green",
  },
  {
    id: "glen",
    name: "Shipley Glen and the wood",
    type: "short",
    time: "About 20 min down, longer if you potter",
    from: "Bracken Hall Green, at the top of the Glen",
    fromHome: "Seven or eight minutes in the car, up Glen Road to the top. On foot it's about forty minutes from the door, or arrive on foot by doing the Cliffe Avenue walk above first.",
    summary: "Along the top of the Glen among the boulders, then down through the wood to the tramway at the bottom.",
    detail: "Either drive up Glen Road and park at the top by Bracken Hall Green, or arrive on foot from the walk above. Follow the Glen along the top: it's rocky, open and full of dogs. When you've had enough, take one of the paths down through the wood to the bottom of the tramway. Climb back up, or turn it into the Saltaire walk.",
    woody: "Off the lead. He'll disappear into the bracken and reappear.",
    parking: "Park at the top of Glen Road by Bracken Hall Green.",
    route: [
      [53.84874,-1.80476],[53.84801,-1.80407],[53.84692,-1.80199],[53.84664,-1.80105],
      [53.84679,-1.80078],[53.84603,-1.79832],[53.84633,-1.79758],[53.84628,-1.79568],
      [53.84571,-1.79484],[53.84522,-1.79483],[53.84383,-1.79218],[53.84303,-1.79135],
      [53.84282,-1.79086],[53.8429,-1.7906]
    ],
    end: "Bottom of the Glen, by the tramway",
  },
  {
    id: "saltaire",
    name: "Down the tramway to Saltaire",
    type: "medium",
    time: "About 45 min, or less with the tram",
    from: "West end of Baildon Bank",
    fromHome: "Twelve minutes on foot to the west end of the bank, much the same start as the Cliffe Avenue walk. Don't take the car: you finish in Saltaire and come home on the train.",
    summary: "From the far end of Baildon Bank, down the Glen tramway to Saltaire. Train home or walk back up.",
    detail: "Follow the bank west to its end, then take the path down to the top of the Shipley Glen Tramway. If it's running (weekends and school holidays, usually) ride it down; otherwise there's a path beside it. At the bottom cross Roberts Park and the river into Saltaire: Salts Mill, cafes, the canal. To get home either walk back up, or take the train from Saltaire to Shipley and change for Baildon.",
    woody: "Dogs go on the tram. Lead on in Saltaire.",
    parking: "Park in Saltaire and do it upwards: tram or path up the Glen, along the bank and back.",
    route: [
      [53.84678,-1.77449],[53.846,-1.77555],[53.84567,-1.77673],[53.84555,-1.77791],
      [53.84574,-1.77984],[53.84558,-1.78209],[53.84586,-1.78254],[53.84718,-1.78257],
      [53.84733,-1.78543],[53.84682,-1.78598],[53.8466,-1.78646],[53.84662,-1.78695],
      [53.84626,-1.78729],[53.84562,-1.78678],[53.84516,-1.78724],[53.84491,-1.78715],
      [53.84509,-1.78603],[53.84481,-1.7877],[53.84479,-1.7894],[53.84498,-1.79241],
      [53.84522,-1.79337],[53.84521,-1.79476],[53.84383,-1.79218],[53.84303,-1.79135],
      [53.84282,-1.79086],[53.8429,-1.7906],[53.84282,-1.79086],[53.84173,-1.78993],
      [53.84158,-1.78933],[53.84114,-1.78883],[53.84056,-1.78902],[53.8406,-1.78937],
      [53.84019,-1.7897],[53.83959,-1.78971],[53.83953,-1.78929],[53.83853,-1.78953],
      [53.83853,-1.79029],[53.83843,-1.78989],[53.83858,-1.79079]
    ],
    end: "Saltaire station",
  },
  {
    id: "dell",
    name: "Ferniehurst Dell",
    type: "short",
    time: "10 min round the loop",
    from: "Ferniehurst Dell",
    fromHome: "Eight minutes on foot, down Baildon Road and left into Ferniehurst. The one to do in a coat and no particular enthusiasm when it's dark and wet.",
    summary: "The quick one for a wet evening or a late wee. Round the dell and back.",
    detail: "A small wooded dell tucked behind the houses on Ferniehurst, five minutes from the door. A loop path runs round it. Nothing to it, which is the point.",
    woody: "Off the lead once you're in.",
    parking: "Street parking on Ferniehurst, though it's quicker to walk.",
    route: [
      [53.84296,-1.76876],[53.84271,-1.76867],[53.8418,-1.76928],[53.84192,-1.76882],
      [53.84346,-1.76727],[53.84192,-1.76882],[53.8418,-1.76928],[53.84271,-1.76867],
      [53.84296,-1.76876]
    ],
    end: "Back where you started",
  },
  {
    id: "canal",
    name: "Roberts Park and the canal",
    type: "medium",
    time: "About 20 min each way, flat",
    from: "Roberts Park, Saltaire",
    fromHome: "Eight minutes in the car, down Baildon Road, over the bridge and along Higher Coach Road to Roberts Park. Free parking there.",
    summary: "Flat and easy: the park, then along the Leeds and Liverpool canal towpath towards Hirst Wood and back.",
    detail: "Park by Roberts Park, do a lap of the park, then cross to the canal and head west along the towpath. Hirst Wood is a mile along and worth going into. Turn round whenever you like. Good for a day when your legs have had enough of hills.",
    woody: "Lead on along the towpath (cyclists), off in Hirst Wood.",
    parking: "Free parking on Higher Coach Road by Roberts Park.",
    route: [
      [53.84108,-1.79136],[53.84087,-1.7911],[53.8406,-1.78937],[53.84019,-1.7897],
      [53.83953,-1.7897],[53.83931,-1.79683],[53.84017,-1.80099],[53.84005,-1.80186],
      [53.83988,-1.80169],[53.83988,-1.80557],[53.83931,-1.80864]
    ],
    end: "Hirst Wood",
  },
  // ---- Days out, all within about 1.5 hours ----
  {
    id: "bolton",
    name: "Bolton Abbey",
    type: "drive",
    time: "35 min drive",
    from: "Bolton Abbey, BD23 6EX",
    fromHome: "Thirty-five minutes in the car, the easiest day out of the lot. Pay on entry at the main car park and it covers the whole estate.",
    summary: "Riverside paths, the stepping stones, the Strid and the priory ruins. Woody's kind of place.",
    detail: "Park at the main car park (pay on entry, covers the estate). Walk up the river to the Strid and back through the woods, about an hour and a half, or just potter by the priory and the stepping stones. Cafes at the Cavendish Pavilion and in the village.",
    woody: "Lead on near the river; the Strid is genuinely dangerous water.",
    route: [[53.98420,-1.88690]],
    end: "Bolton Abbey",
  },
  {
    id: "brimham",
    name: "Brimham Rocks",
    type: "drive",
    time: "About an hour's drive",
    from: "Brimham Rocks, HG3 4DW (National Trust)",
    fromHome: "About an hour in the car, out past Ilkley and over towards Nidderdale. National Trust car park at the end of it, a few pounds if you're not a member.",
    summary: "Enormous weather-carved rocks on a moortop with paths all around them. Easy walking, big views.",
    detail: "National Trust car park, a few pounds if you're not a member. Paths wander between the rocks and out to the edge for the view over Nidderdale. A couple of hours is plenty. Kiosk cafe at the top.",
    woody: "Lead on, it's the rule there and there are drops.",
    route: [[54.07570,-1.67350]],
    end: "Brimham Rocks",
  },
  {
    id: "grassington",
    name: "Grassington and Linton Falls",
    type: "drive",
    time: "About 55 min drive",
    from: "Grassington, BD23 5AB",
    fromHome: "Just under an hour in the car, up the Wharfe valley. Village car park when you arrive.",
    summary: "A Dales village with a cobbled square, then the short walk down to Linton Falls on the Wharfe.",
    detail: "Park in the village car park. Walk down Sedber Lane to Linton Falls (ten minutes), cross the footbridge and follow the river a while, then back up for lunch. Plenty of dog-friendly tea rooms and cafes round the square.",
    woody: "Off the lead by the river, on in the village.",
    route: [[54.07130,-2.00460]],
    end: "Grassington",
  },
  {
    id: "ingleton",
    name: "Ingleton Waterfalls Trail",
    type: "drive",
    time: "About 1 hr 15 drive",
    from: "Ingleton, LA6 3ET",
    fromHome: "About an hour and a quarter in the car, the furthest of the lot, so make a whole day of it or leave it. Parking is included in the entry.",
    summary: "The full day out: a 4.5 mile circuit past a string of waterfalls in two wooded gorges. Paid entry, worth every penny.",
    detail: "Entry is about fifteen pounds and includes parking. The trail is well made but has a lot of steps; allow three hours with stops. Take the anticlockwise route (Pecca Falls first). Cafe at the top and the bottom.",
    woody: "Lead on the whole way, it's steep and busy.",
    route: [[54.15330,-2.46770]],
    end: "Ingleton",
  },
  {
    id: "haworth",
    name: "Haworth",
    type: "drive",
    time: "30 min drive",
    from: "Haworth, BD22 8DR",
    fromHome: "Half an hour in the car, over towards Keighley. Park at the top of the village by the parsonage.",
    summary: "The Bronte village. Steep cobbled main street, the parsonage, and moor walks out the back to the Bronte waterfall.",
    detail: "Park at the top by the parsonage. Wander the main street, then if you fancy it the path out to the Bronte waterfall from the church is about an hour there and back across the moor. The steam railway runs at weekends.",
    woody: "Off the lead on the moor path, on in the village.",
    route: [[53.82960,-1.95700]],
    end: "Haworth",
  },
];

// ------------------------------------------------------------
//  Places on the map. group: "need" (shops, fuel, vet) or "nice" (for you)
// ------------------------------------------------------------
const PLACES = [
  { name: "Co-op", group: "need", at: [53.85427,-1.76515], note: "25 Northgate. 7am to 10pm, Sunday 10 to 4." },
  { name: "Four Corners coffee", group: "nice", at: [53.85400,-1.76540], note: "20 Northgate. Tue to Sat 8:30 to 3, Sun 9:30 to 2, closed Monday. Dogs welcome, the best coffee in Baildon." },
  { name: "Baildon Vets", group: "need", at: [53.84098,-1.76585], note: "5 Berry Drive. 01274 580785. Five minutes down the hill." },
  { name: "Dog bus pickup", group: "need", at: [53.84070,-1.76528], note: "Berry Drive, the motorbike showroom car park, just along from the vets. Thursday 10:40. Look for the car park rather than trusting the pin exactly." },
  { name: "Browgate Pharmacy", group: "need", at: [53.85129,-1.76639], note: "5 Browgate, in the village. 01274 583534." },
  { name: "Baildon Medical Practice", group: "need", at: [53.85351,-1.76794], note: "10 Newton Way. 01274 581979." },
  { name: "Cliff Avenue Surgery", group: "need", at: [53.84874,-1.76883], note: "The other surgery, two minutes from the house on Cliffe Avenue." },
  { name: "Baildon Moor Garage", group: "need", at: [53.85492,-1.76708], note: "Fuel, up on Northgate past the village." },
  { name: "Otley Road fuel", group: "need", at: [53.83233,-1.77576], note: "Service station on Otley Road over the bridge, 24 hours." },
  { name: "Baildon station", group: "need", at: [53.85020,-1.75370], note: "Trains to Ilkley one way, Shipley and Bradford the other." },
  { name: "Crook Farm", group: "need", at: [53.85102,-1.79481], note: "Steph's mum and dad, up Glen Road." },
  { name: "Cliffe Avenue Park", group: "nice", at: [53.84732,-1.77100], note: "The little park five minutes down the road. Start of the bank walk." },
  { name: "Ferniehurst Dell", group: "nice", at: [53.84306,-1.76832], note: "Small wooded dell, eight minutes from the door." },
  { name: "Bracken Hall Green", group: "nice", at: [53.84881,-1.80456], note: "Top of Shipley Glen. Countryside centre, open ground, dogs everywhere." },
  { name: "Shipley Glen Tramway", group: "nice", at: [53.84399,-1.79250], note: "Little funicular down to Saltaire. Weekends and school holidays. Dogs allowed." },
  { name: "Salts Mill", group: "nice", at: [53.83870,-1.78788], note: "Saltaire. Hockney gallery, a very good bookshop and cafe. Free." },
  { name: "Roberts Park", group: "nice", at: [53.84107,-1.79130], note: "Saltaire. Riverside park, bandstand, cafe. Flat." },
  { name: "Baildon Moor trig point", group: "nice", at: [53.85670,-1.78675], note: "The top of everything round here. Big views on a clear day." },
  { name: "Ilkley", group: "nice", at: [53.92479,-1.82129], note: "Twenty minutes on the train from Baildon. Betty's, the Grove, the moor." },
];
