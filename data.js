// ============================================================
//  WOODY'S WEEK  -  everything you might want to change is here.
//  Edit this file only. index.html does not need touching.
//  Coordinates are [latitude, longitude].
//
//  Out of the front door: anything north is a right turn, anything south
//  is a left. Don't take the first turn in a GPX for the one at the door:
//  plotaroute's first instruction is the junction at the top of the road.
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
  { time: "Any time", what: "The gardener may turn up. He knows the garden well, so there's nothing you need to do." },
  { time: "Every other day", what: "Plants: a splash of water for the ones that look thirsty." },
];

// ------------------------------------------------------------
//  Woody tab
// ------------------------------------------------------------
const WOODY = [
  { h: "Food",     p: "4 level scoops from the bin into his maze bowl, morning after his first toilet trip and again at 18:00. He'll cry for it early. He's absolutely fine to wait, so don't let him talk you into it." },
  { h: "Chew",     p: "12:00, from the left cupboard in the dining room. A beef chew or similar." },
  { h: "Water",    p: "Normal tap water. Check the bowl a couple of times a day." },
  { h: "Leaving him", p: "If you're going out for more than an hour, walk him first. Lock the back door, shut the curtains, lights off if it's dark. Take a treat from the bag on the counter into the lounge, say 'on your bed', put the treat on the bed with him. Switch on the camera (on the fireplace), light off, door shut. When you're back, open the back door for him." },
  { h: "Bedtime",  p: "Any time from about 9. Back door open for a last wee, then the same 'on your bed' routine. Collar off before bed. If he cries in the night, ignore him (or let him stay on your bed I SUPPOSE)." },
  { h: "Walks",    p: "Take one lead, not two. The short one for everything except the trot round the block, which is what the extendy one is for. Anywhere he might come off, it's the short lead. Both live in the cupboard, poo bags by the door. He's fine off the lead on the moor and in the woods." },
  { h: "Dog bus",  p: "Thursday, 10:40, Berry Drive in the motorbike showroom car park. Collar and short lead on. He's done it before and he'll be beside himself, so just follow him." },
  { h: "In the car", p: "Collar and short lead on and he's fine. If you ever need the vet, they're on Berry Drive, five minutes away, number below." },
  { h: "Barking",  p: "He barks when he goes out the back. It's announcement rather than alarm, so nothing to worry about." },
];

// ------------------------------------------------------------
//  Walks. type: "short" (under 30 min), "medium" (30 to 60), "long" (over an hour), "drive" (day out)
//  route: real walking routes from OpenStreetMap. Times are walking only,
//  one way unless it says otherwise, and don't count stops or dawdling.
// ------------------------------------------------------------
const WALKS = [
  {
    id: "block",
    mins: 20, drive: 0, vibe: ["easy","pavement"],
    name: "Round the block",
    type: "short",
    time: "20 min, all pavement",
    from: "Home",
    fromHome: "Right out of the door. You're back before the kettle's cold.",
    summary: "The quick trot: up Green Road, round by Cliffe Avenue and back along Sandals Road.",
    detail: "The shortest one there is. Right out of the door and up Baildon Road onto Green Road, round the back streets to Cliffe Avenue, then Glenholm Road and Sandals Road bring you back to the door. Lovely last thing at night, or when the weather's against you.",
    woody: "Extendy lead. This is the one walk it's for: all streets, and no call to let him off.",
    parking: "No need.",
    route: [
      [53.84839,-1.76658],[53.84975,-1.76791],[53.85003,-1.76799],[53.85037,-1.76786],
      [53.85026,-1.76872],[53.8499,-1.7693],[53.84829,-1.77053],[53.84792,-1.77065],
      [53.84764,-1.77093],[53.84751,-1.77084],[53.84713,-1.77116],[53.84703,-1.77108],
      [53.84692,-1.7712],[53.84682,-1.77095],[53.8467,-1.77108],[53.84633,-1.77028],
      [53.84749,-1.7691],[53.84752,-1.76879],[53.84712,-1.76833],[53.84811,-1.76629],
      [53.84838,-1.76657]
    ],
    end: "Back at the door",
  },
  {
    id: "village",
    mins: 40, drive: 0, vibe: ["pavement","shops"],
    name: "Up to the village",
    type: "short",
    time: "20 min each way",
    from: "Home",
    fromHome: "Right out of the front door and up the hill. This is the one that starts at home.",
    summary: "The everyday one. Up the bank to the village, coffee at the top.",
    detail: "Right out of the house and up Baildon Road, then Green Road and round into Lane End. Bank Walk takes the last of the climb and brings you out on Westgate at the top, just by the village. The Co-op and Four Corners are a minute further along Northgate. Come back the same way.",
    woody: "Short lead the whole way. Roads on the way up, then shops at the top.",
    parking: "No need, it starts at the door.",
    route: [
      [53.84838,-1.76657],[53.84975,-1.76791],[53.85037,-1.76786],[53.85026,-1.76872],
      [53.84959,-1.76957],[53.85038,-1.76949],[53.85085,-1.76896],[53.85113,-1.76832],
      [53.85145,-1.76809],[53.85198,-1.76819],[53.85256,-1.76786],[53.85319,-1.76621],
      [53.85345,-1.76642],[53.85363,-1.76642],[53.85363,-1.76625]
    ],
    end: "Baildon village",
  },
  {
    id: "dell",
    mins: 25, drive: 0, vibe: ["easy","pavement"],
    name: "Round Ferniehurst",
    type: "short",
    time: "25 min, all pavement",
    from: "Home",
    fromHome: "Left out of the door, then along and into Cliffe Avenue.",
    summary: "The quick one for a wet evening or a last wee. A loop round the streets and back.",
    detail: "All pavement and no hills to speak of. Down Cliffe Avenue, round Glenholm Road and Enfield Road, along Temple Rhydding Drive, then back up Maude Avenue onto Baildon Road and home. Nothing to it, which is the point when it's dark and raining.",
    woody: "Short lead the whole way, it's all streets.",
    parking: "No need.",
    route: [
      [53.84918,-1.7674],[53.84824,-1.76934],[53.84768,-1.77006],[53.84786,-1.77071],
      [53.84764,-1.77093],[53.84751,-1.77084],[53.84692,-1.7712],[53.84682,-1.77095],
      [53.8467,-1.77108],[53.84633,-1.77028],[53.84607,-1.77046],[53.84577,-1.77016],
      [53.84539,-1.77119],[53.84502,-1.77095],[53.84488,-1.77064],[53.84432,-1.77036],
      [53.84482,-1.76652],[53.84629,-1.76574],[53.84667,-1.76494],[53.84838,-1.76657]
    ],
    end: "Back at the door",
  },
  {
    id: "glen",
    mins: 15, drive: 8, vibe: ["easy","flat","views"],
    name: "Shipley Glen, the short loop",
    type: "short",
    time: "15 min round the loop",
    from: "Top of Glen Road",
    fromHome: "Seven or eight minutes in the car, up Glen Road, and park at the top by Bracken Hall Green.",
    summary: "Once you're up there, a short potter over the rocks and back to the car.",
    detail: "The lazy version, and no worse for it. Park at the top and follow the path out over the boulders, then loop back. Open, rocky and full of dogs. If you want more of it, the walk below does the same ground on foot from the door.",
    woody: "Short lead up, then off it on the rocks. He'll disappear into the bracken and reappear.",
    parking: "Park at the top of Glen Road by Bracken Hall Green.",
    route: [
      [53.84607,-1.79914],[53.8459,-1.79911],[53.84604,-1.79836],[53.84679,-1.80078],
      [53.84664,-1.80105],[53.84692,-1.80199],[53.84758,-1.80312],[53.84691,-1.80227],
      [53.84652,-1.80126],[53.84664,-1.80105],[53.84609,-1.79913]
    ],
    end: "Back at the car",
  },
  {
    id: "glenhome",
    mins: 120, drive: 0, vibe: ["hills","views","woods"],
    name: "The Glen and back, on foot",
    type: "long",
    time: "About two hours, 9.8 km",
    from: "Home",
    fromHome: "Left out of the door, and no car at either end.",
    summary: "The big local one: out along the top to Shipley Glen and back the same way.",
    detail: "Down Cliffe Avenue and onto Green Road, which runs west along the top of the bank with the crags below you and keeps going most of the way there. Prod Lane drops you in at Bracken Hall Green and the Glen. Loop round the rocks, then turn and come back the way you came. It's a long one and it's a proper walk, so pick a decent day and take water for both of you.",
    woody: "Short lead. Off it along the top and at the Glen, back on for the roads at either end.",
    parking: "None needed. If you'd rather drive, do the short Glen loop above instead.",
    route: [
      [53.84839,-1.76658],[53.84918,-1.7674],[53.84768,-1.77006],[53.84786,-1.77071],
      [53.84822,-1.77078],[53.84766,-1.77175],[53.84715,-1.77178],[53.84644,-1.77404],
      [53.84548,-1.77534],[53.84508,-1.77767],[53.84509,-1.7798],[53.84555,-1.78101],
      [53.84507,-1.78258],[53.84555,-1.78101],[53.84509,-1.7798],[53.84521,-1.77651],
      [53.84548,-1.77534],[53.84626,-1.77442],[53.84647,-1.77492],[53.846,-1.77555],
      [53.84557,-1.77768],[53.84558,-1.78209],[53.84586,-1.78254],[53.84718,-1.78257],
      [53.84733,-1.78543],[53.84626,-1.78729],[53.84562,-1.78678],[53.84491,-1.78715],
      [53.84479,-1.7894],[53.84538,-1.79635],[53.84624,-1.79898],[53.84606,-1.79914],
      [53.84652,-1.80126],[53.84785,-1.80302],[53.84994,-1.80457],[53.84941,-1.8049],
      [53.84801,-1.80407],[53.84692,-1.80199],[53.84618,-1.79953],[53.84624,-1.79898],
      [53.84538,-1.79635],[53.84479,-1.7894],[53.84491,-1.78715],[53.84562,-1.78678],
      [53.84626,-1.78729],[53.84733,-1.78543],[53.84718,-1.78257],[53.84586,-1.78254],
      [53.84558,-1.78209],[53.84557,-1.77768],[53.846,-1.77555],[53.84647,-1.77492],
      [53.84626,-1.77442],[53.84548,-1.77534],[53.84508,-1.77767],[53.84509,-1.7798],
      [53.84555,-1.78101],[53.84507,-1.78258],[53.84555,-1.78101],[53.84509,-1.7798],
      [53.8449,-1.78101],[53.84548,-1.77534],[53.84644,-1.77404],[53.84715,-1.77178],
      [53.84766,-1.77175],[53.84927,-1.76925],[53.84909,-1.76852],[53.84939,-1.76761],
      [53.84839,-1.76658]
    ],
    end: "Back at the door",
  },
  {
    id: "trig",
    mins: 100, drive: 0, vibe: ["hills","views"],
    name: "The moor and the trig point",
    type: "long",
    time: "About 1 hr 40 for the loop, 6.1 km",
    from: "Home",
    fromHome: "Right out of the door. Up to the village first, the same way as the village walk.",
    summary: "Up through the village and onto the moor. The trig point is the top of everything round here.",
    detail: "Up to the village the usual way, then Northgate and Pennithorne Avenue to the edge of the golf club. Past the clubhouse the track opens onto the moor and climbs steadily to the trig pillar. On a clear day you can see across to Ilkley Moor and down into three valleys. It comes back a different way, down Hawksworth Road and Browgate, so it's a loop rather than there and back.",
    woody: "Short lead. He's fine off it on the moor; keep him close past the golf club and on the roads.",
    parking: "If you'd rather skip the climb, drive up Glen Road to the moor car park on Bingley Road and the trig is twenty minutes up from there.",
    route: [
      [53.84839,-1.76658],[53.84975,-1.76791],[53.85037,-1.76786],[53.85026,-1.76872],
      [53.84959,-1.76957],[53.85038,-1.76949],[53.85085,-1.76896],[53.85113,-1.76832],
      [53.85145,-1.76809],[53.85198,-1.76819],[53.85256,-1.76786],[53.85319,-1.76621],
      [53.85339,-1.76634],[53.85352,-1.76608],[53.85367,-1.76608],[53.85424,-1.76624],
      [53.85515,-1.76705],[53.85501,-1.76737],[53.85508,-1.76772],[53.85563,-1.76843],
      [53.85615,-1.76957],[53.85686,-1.77027],[53.85707,-1.77097],[53.85702,-1.77316],
      [53.85652,-1.7765],[53.85681,-1.78052],[53.85583,-1.78082],[53.85515,-1.78143],
      [53.85458,-1.78224],[53.85434,-1.783],[53.85442,-1.7835],[53.85403,-1.78619],
      [53.85416,-1.78754],[53.85475,-1.78781],[53.85576,-1.7876],[53.85609,-1.78744],
      [53.8567,-1.78675],[53.85752,-1.7865],[53.85754,-1.78612],[53.85809,-1.78563],
      [53.8583,-1.78569],[53.85838,-1.78546],[53.85935,-1.78523],[53.86053,-1.78452],
      [53.86043,-1.78325],[53.86066,-1.78241],[53.86008,-1.78257],[53.8584,-1.78205],
      [53.85732,-1.78125],[53.85681,-1.78052],[53.85652,-1.7765],[53.85702,-1.77316],
      [53.85707,-1.77097],[53.85686,-1.77027],[53.85634,-1.76964],[53.8562,-1.76845],
      [53.85473,-1.76657],[53.85395,-1.7661],[53.85352,-1.76608],[53.85321,-1.76577],
      [53.8525,-1.76586],[53.85242,-1.76615],[53.85145,-1.76617],[53.85049,-1.76775],
      [53.85003,-1.76799],[53.84939,-1.76761],[53.84839,-1.76658]
    ],
    end: "Back at the door",
  },
  {
    id: "canal",
    mins: 40, drive: 8, vibe: ["easy","flat","water"],
    name: "The canal, short loop",
    type: "medium",
    time: "40 min, flat, 3 km",
    from: "Higher Coach Road, Saltaire",
    fromHome: "Eight minutes in the car, down Baildon Road, over the bridge and along Higher Coach Road. Park on the road there.",
    summary: "Flat and easy: out along the Leeds and Liverpool towpath and back on the other side of the river.",
    detail: "Park on Higher Coach Road and drop onto the canal. Head west along the towpath, then loop back along the river. Not a hill on it, which is the whole appeal after a few days of Baildon.",
    woody: "Short lead along the towpath, the cyclists come round the bends quickly.",
    parking: "Free on Higher Coach Road.",
    route: [
      [53.84348,-1.80203],[53.84356,-1.8027],[53.84285,-1.80269],[53.84208,-1.80231],
      [53.84168,-1.80356],[53.84168,-1.80824],[53.84108,-1.8121],[53.84074,-1.81555],
      [53.84036,-1.81621],[53.8405,-1.81424],[53.84047,-1.81441],[53.84023,-1.81431],
      [53.84094,-1.80791],[53.84092,-1.80643],[53.84055,-1.80389],[53.84017,-1.80286],
      [53.83996,-1.80269],[53.83988,-1.80169],[53.84005,-1.80186],[53.84011,-1.80169],
      [53.84005,-1.80112],[53.84015,-1.80084],[53.84025,-1.80117],[53.8414,-1.80065],
      [53.84141,-1.80046],[53.84153,-1.80126],[53.84145,-1.80154],[53.84185,-1.80228],
      [53.84187,-1.80273],[53.84218,-1.80228],[53.84285,-1.80269],[53.84356,-1.8027],
      [53.84348,-1.80204]
    ],
    end: "Back at the car",
  },
  {
    id: "canalfull",
    mins: 60, drive: 8, vibe: ["easy","flat","water","shops"],
    name: "The canal, long loop",
    type: "medium",
    time: "About an hour, flat, 4.6 km",
    from: "Higher Coach Road, Saltaire",
    fromHome: "Same as the short one: eight minutes in the car to Higher Coach Road.",
    summary: "The same towpath but carried on to Saltaire and Roberts Park before looping back.",
    detail: "As the short loop, but instead of turning early you carry on to Saltaire: past Roberts Park, the mill and the cafes, then back along the river. Still flat the whole way. This is the one to do if you want a sit down and a coffee in the middle.",
    woody: "Short lead on the towpath and through Saltaire, off in Roberts Park if it's quiet.",
    parking: "Free on Higher Coach Road.",
    route: [
      [53.84348,-1.80203],[53.84356,-1.8027],[53.84285,-1.80269],[53.84208,-1.80231],
      [53.84168,-1.80356],[53.84168,-1.80824],[53.84108,-1.8121],[53.84074,-1.81555],
      [53.84036,-1.81621],[53.8405,-1.81424],[53.84047,-1.81441],[53.84023,-1.81431],
      [53.84094,-1.80791],[53.84092,-1.80643],[53.84053,-1.8038],[53.84017,-1.80286],
      [53.83996,-1.80269],[53.83988,-1.80169],[53.84005,-1.80186],[53.84014,-1.80158],
      [53.84005,-1.80112],[53.84017,-1.80099],[53.83932,-1.79699],[53.83958,-1.78968],
      [53.83946,-1.78888],[53.83971,-1.78883],[53.83974,-1.78964],[53.83959,-1.78971],
      [53.84019,-1.7897],[53.84041,-1.78951],[53.84019,-1.78998],[53.84028,-1.7909],
      [53.84015,-1.79238],[53.8404,-1.79337],[53.84068,-1.7935],[53.84067,-1.79466],
      [53.84089,-1.79731],[53.84153,-1.80126],[53.84145,-1.80154],[53.84185,-1.80228],
      [53.84187,-1.80273],[53.84218,-1.80228],[53.84285,-1.80269],[53.84356,-1.8027],
      [53.84347,-1.80202]
    ],
    end: "Back at the car",
  },
  {
    id: "willywood",
    mins: 90, drive: 0, vibe: ["hills","woods","water"],
    name: "Willy Wood and Tong Park",
    type: "long",
    time: "About 1 hr 30 for the loop, 6.3 km",
    from: "Home",
    fromHome: "Right out of the door. Up to the village first, then out east.",
    summary: "A proper loop out east: up through the village, out to Heygate Lane, down through Willy Wood and back along Station Road.",
    detail: "Up Northgate and out along East Parade and Heather Road to Jenny Lane, then Heygate Lane takes you to the top of the wood. The path drops through Willy Wood and follows the beck down towards Tong Park, coming out at Hollin Head. Langley Lane and Roundwood Road bring you round to Station Road, which runs all the way back to Baildon Road and home. Flat-ish once you're up, apart from the drop through the wood and the climb out.",
    woody: "Short lead. Off it in the wood, back on along Jenny Lane and the whole of Station Road.",
    parking: "Park at Baildon station (free) and pick the loop up from Station Road if you'd rather skip the climb out of the village.",
    route: [
      [53.84841,-1.7666],[53.84939,-1.76761],[53.85003,-1.76799],[53.85049,-1.76775],
      [53.85145,-1.76617],[53.85326,-1.7661],[53.85339,-1.7659],[53.85367,-1.76608],
      [53.85413,-1.76403],[53.85506,-1.76422],[53.85525,-1.76255],[53.85693,-1.76229],
      [53.85765,-1.76191],[53.85788,-1.76205],[53.85849,-1.76194],[53.85881,-1.76147],
      [53.85906,-1.76148],[53.85912,-1.76077],[53.85955,-1.7592],[53.85952,-1.75786],
      [53.86069,-1.76008],[53.86186,-1.75859],[53.86253,-1.75809],[53.86293,-1.75693],
      [53.86275,-1.75574],[53.8617,-1.75403],[53.86127,-1.75364],[53.86031,-1.7533],
      [53.85987,-1.75249],[53.85974,-1.75178],[53.85946,-1.7513],[53.85915,-1.75128],
      [53.85905,-1.75085],[53.85953,-1.75014],[53.86075,-1.74954],[53.86152,-1.74886],
      [53.86187,-1.74848],[53.86191,-1.74805],[53.86066,-1.74946],[53.85969,-1.74993],
      [53.85861,-1.74777],[53.85864,-1.74949],[53.8589,-1.75076],[53.85915,-1.75128],
      [53.85908,-1.75158],[53.85889,-1.75168],[53.85794,-1.75156],[53.85761,-1.75096],
      [53.85706,-1.75057],[53.8568,-1.74954],[53.85654,-1.74995],[53.85632,-1.74994],
      [53.8546,-1.74856],[53.85361,-1.74882],[53.85301,-1.74995],[53.85164,-1.75083],
      [53.85147,-1.75162],[53.8506,-1.7528],[53.85106,-1.75377],[53.8506,-1.75451],
      [53.85032,-1.75554],[53.85001,-1.75811],[53.84987,-1.76049],[53.84923,-1.76386],
      [53.84919,-1.76692],[53.84905,-1.76677],[53.84881,-1.76701],[53.84842,-1.76661]
    ],
    end: "Back at the door",
  },
  {
    id: "saltaire",
    mins: 90, drive: 0, vibe: ["shops","water","history","views"],
    name: "Down to Saltaire",
    type: "long",
    time: "About 50 min there, 4.9 km",
    from: "Home",
    fromHome: "Left out of the door. Don't take the car: you finish in Saltaire.",
    summary: "Out along the top of the bank, down to the river and over into Saltaire.",
    detail: "Down Cliffe Avenue onto Green Road and west along the top, the same start as the Glen walk. Then the path drops to Higher Coach Road, over the river, and into Saltaire on Victoria Road. Salts Mill, the bookshop, the cafes and Roberts Park are all right there when you arrive.",
    woody: "Short lead. Off it along the top, back on from the river onwards.",
    back: {
      time: "40 min",
      detail: "Coach Road and Thompson Lane back up to Green Road, then Baildon Road home. Shorter than the way out and less pretty. Or get the train to Shipley and change for Baildon, which is quicker than it sounds.",
      route: [
        [53.83838,-1.78957],[53.83953,-1.78929],[53.83959,-1.78971],[53.83986,-1.78978],
        [53.8406,-1.78937],[53.84056,-1.78902],[53.84114,-1.78883],[53.84137,-1.78903],
        [53.8423,-1.78731],[53.84257,-1.78628],[53.84261,-1.7848],[53.84304,-1.78199],
        [53.84342,-1.78035],[53.84394,-1.77929],[53.84447,-1.7753],[53.84653,-1.77128],
        [53.84801,-1.7697],[53.84918,-1.7674],[53.84837,-1.76656]
      ],
    },
    route: [
      [53.8484,-1.76659],[53.84918,-1.7674],[53.84824,-1.76934],[53.84768,-1.77006],
      [53.84786,-1.77071],[53.84829,-1.77053],[53.84822,-1.77078],[53.84766,-1.77175],
      [53.84715,-1.77178],[53.84644,-1.77404],[53.84606,-1.77436],[53.84548,-1.77534],
      [53.84511,-1.77734],[53.84509,-1.7798],[53.84555,-1.78101],[53.84533,-1.7814],
      [53.84507,-1.78258],[53.84533,-1.7814],[53.84555,-1.78101],[53.84509,-1.7798],
      [53.84516,-1.77901],[53.84508,-1.77767],[53.84521,-1.77651],[53.84548,-1.77534],
      [53.84606,-1.77436],[53.84626,-1.77442],[53.84626,-1.77464],[53.84647,-1.77492],
      [53.846,-1.77555],[53.84567,-1.77673],[53.84557,-1.77768],[53.84574,-1.77984],
      [53.84558,-1.78209],[53.84586,-1.78254],[53.84647,-1.78241],[53.84718,-1.78257],
      [53.84714,-1.78378],[53.84733,-1.78543],[53.84682,-1.78598],[53.8466,-1.78646],
      [53.84662,-1.78695],[53.84626,-1.78729],[53.84588,-1.78685],[53.84562,-1.78678],
      [53.84532,-1.78687],[53.84516,-1.78724],[53.84491,-1.78715],[53.84479,-1.7894],
      [53.84498,-1.79115],[53.84498,-1.79241],[53.84522,-1.79337],[53.84521,-1.79476],
      [53.84383,-1.79218],[53.84334,-1.79184],[53.84293,-1.79095],[53.84173,-1.78993],
      [53.84158,-1.78933],[53.84114,-1.78883],[53.84056,-1.78902],[53.8406,-1.78937],
      [53.84019,-1.7897],[53.83959,-1.78971],[53.83953,-1.78929],[53.83838,-1.78957]
    ],
    end: "Saltaire",
  },
  {
    id: "ilkley",
    mins: 200, drive: 0, vibe: ["hills","views"],
    name: "Over the moor to Ilkley",
    type: "long",
    time: "Half a day. 12.5 km, three hours of walking",
    from: "Home",
    fromHome: "Right out of the door, and you come home on the train, so leave the car.",
    summary: "The big one. Up through the village, over the moors and down into Ilkley.",
    detail: "Up Northgate and out of the top of Baildon, then Sconce Lane and the long crossing of Hawksworth and Burley Moor. It drops into Ilkley on Wells Road and Whitton Croft Road, coming out by the station. Betty's or one of the cafes by the river for lunch before the train. Only on a good day, and take water for both of you.",
    woody: "Short lead. Sheep on the moor once you're past the top, so on it whenever they're about.",
    back: {
      time: "Train, then 20 min",
      detail: "Train from Ilkley straight back to Baildon, no change. From Baildon station it's twenty minutes home: Ridgewood Close, then Station Road all the way to Baildon Road.",
      route: [
        [53.85017,-1.75383],[53.84997,-1.75417],[53.85026,-1.75394],[53.85021,-1.75445],
        [53.85039,-1.75513],[53.85001,-1.75811],[53.84987,-1.76049],[53.84923,-1.76386],
        [53.84918,-1.7674],[53.84842,-1.7666]
      ],
    },
    route: [
      [53.8484,-1.76659],[53.85003,-1.76799],[53.85145,-1.76617],[53.85339,-1.7659],
      [53.85424,-1.76624],[53.85611,-1.76839],[53.85706,-1.76855],[53.85967,-1.7711],
      [53.86162,-1.77407],[53.86609,-1.77782],[53.86677,-1.77726],[53.86657,-1.77667],
      [53.86668,-1.77241],[53.86716,-1.77214],[53.86668,-1.77241],[53.86657,-1.77667],
      [53.86677,-1.77726],[53.87027,-1.78013],[53.87184,-1.78344],[53.87233,-1.78356],
      [53.87281,-1.78455],[53.87346,-1.78438],[53.87556,-1.78932],[53.8764,-1.79004],
      [53.87683,-1.78992],[53.87794,-1.79201],[53.87648,-1.79526],[53.87797,-1.79201],
      [53.88067,-1.79572],[53.8859,-1.8005],[53.88686,-1.80277],[53.88766,-1.80366],
      [53.88921,-1.804],[53.89042,-1.80541],[53.89307,-1.80711],[53.89457,-1.80748],
      [53.89555,-1.80699],[53.89768,-1.80723],[53.90006,-1.8081],[53.90119,-1.8091],
      [53.90237,-1.81114],[53.90604,-1.8129],[53.90836,-1.81271],[53.91058,-1.81401],
      [53.91129,-1.81489],[53.91317,-1.81485],[53.91363,-1.8202],[53.91591,-1.82259],
      [53.91638,-1.82168],[53.91571,-1.81965],[53.91657,-1.81766],[53.91707,-1.81783],
      [53.91742,-1.81729],[53.91861,-1.81854],[53.91922,-1.81773],[53.91968,-1.81866],
      [53.92038,-1.8218],[53.91966,-1.82202],[53.92007,-1.82026],[53.92075,-1.82235],
      [53.92393,-1.8226],[53.92439,-1.8214]
    ],
    end: "Ilkley station",
  },
  // ---- Days out, all within about 1.5 hours ----
  {
    id: "bolton",
    mins: 150, drive: 35, vibe: ["water","history","views","easy"],
    name: "Bolton Abbey",
    type: "drive",
    time: "35 min drive",
    from: "Bolton Abbey, BD23 6EX",
    fromHome: "Thirty-five minutes in the car, the easiest day out of the lot. Pay on entry at the main car park and it covers the whole estate.",
    summary: "Riverside paths, the stepping stones, the Strid and the priory ruins. Woody's kind of place.",
    detail: "Park at the main car park (pay on entry, covers the estate). Walk up the river to the Strid and back through the woods, about an hour and a half, or just potter by the priory and the stepping stones. Cafes at the Cavendish Pavilion and in the village.",
    woody: "Short lead near the river; the Strid is genuinely dangerous water.",
    route: [[53.98420,-1.88690]],
    end: "Bolton Abbey",
  },
  {
    id: "brimham",
    mins: 150, drive: 60, vibe: ["views","easy"],
    name: "Brimham Rocks",
    type: "drive",
    time: "About an hour's drive",
    from: "Brimham Rocks, HG3 4DW (National Trust)",
    fromHome: "About an hour in the car, out past Ilkley and over towards Nidderdale. National Trust car park at the end of it, a few pounds if you're not a member.",
    summary: "Enormous weather-carved rocks on a moortop with paths all around them. Easy walking, big views.",
    detail: "National Trust car park, a few pounds if you're not a member. Paths wander between the rocks and out to the edge for the view over Nidderdale. A couple of hours is plenty. Kiosk cafe at the top.",
    woody: "Short lead, it's the rule there and there are some drops.",
    route: [[54.07570,-1.67350]],
    end: "Brimham Rocks",
  },
  {
    id: "grassington",
    mins: 150, drive: 55, vibe: ["shops","water","easy"],
    name: "Grassington and Linton Falls",
    type: "drive",
    time: "About 55 min drive",
    from: "Grassington, BD23 5AB",
    fromHome: "Just under an hour in the car, up the Wharfe valley. Village car park when you arrive.",
    summary: "A Dales village with a cobbled square, then the short walk down to Linton Falls on the Wharfe.",
    detail: "Park in the village car park. Walk down Sedber Lane to Linton Falls (ten minutes), cross the footbridge and follow the river a while, then back up for lunch. Plenty of dog-friendly tea rooms and cafes round the square.",
    woody: "Short lead in the village, off it by the river.",
    route: [[54.07130,-2.00460]],
    end: "Grassington",
  },
  {
    id: "ingleton",
    mins: 210, drive: 75, vibe: ["water","views","hills"],
    name: "Ingleton Waterfalls Trail",
    type: "drive",
    time: "About 1 hr 15 drive",
    from: "Ingleton, LA6 3ET",
    fromHome: "About an hour and a quarter in the car, the furthest of the lot, so it's worth making a whole day of it. Parking is included in the entry.",
    summary: "The full day out: a 4.5 mile circuit past a string of waterfalls in two wooded gorges. Paid entry, worth every penny.",
    detail: "Entry is about fifteen pounds and includes parking. The trail is well made but has a lot of steps; allow three hours with stops. Take the anticlockwise route (Pecca Falls first). Cafe at the top and the bottom.",
    woody: "Short lead the whole way. It's steep in places and it gets busy.",
    route: [[54.15330,-2.46770]],
    end: "Ingleton",
  },
  {
    id: "hebden",
    mins: 150, drive: 40, vibe: ["shops","water","history","easy"],
    name: "Hebden Bridge",
    type: "drive",
    time: "About 40 min drive",
    from: "Hebden Bridge, HX7 8AU",
    fromHome: "Forty minutes in the car, down the Calder valley. Park in the town car park by the canal.",
    summary: "Bookshops, cafes and a canal running through the middle of it. Add Hardcastle Crags if the weather holds.",
    detail: "Park in the town and wander: independent shops, secondhand books, and plenty of places to sit outside with a dog. The canal towpath runs right through, flat in both directions, and the marina is worth the ten minutes. If you want a proper walk, Hardcastle Crags is five minutes further on, a National Trust wood in a steep valley with the river at the bottom.",
    woody: "Short lead in the town and along the towpath, off in the woods at Hardcastle Crags.",
    route: [[53.74064,-2.00923]],
    end: "Hebden Bridge",
  },
  {
    id: "haworth",
    mins: 120, drive: 30, vibe: ["shops","history","views"],
    name: "Haworth",
    type: "drive",
    time: "30 min drive",
    from: "Haworth, BD22 8DR",
    fromHome: "Half an hour in the car, over towards Keighley. Park at the top of the village by the parsonage.",
    summary: "The Bronte village. Steep cobbled main street, the parsonage, and moor walks out the back to the Bronte waterfall.",
    detail: "Park at the top by the parsonage. Wander the main street, then if you fancy it the path out to the Bronte waterfall from the church is about an hour there and back across the moor. The steam railway runs at weekends.",
    woody: "Short lead in the village, off it on the moor path.",
    route: [[53.82960,-1.95700]],
    end: "Haworth",
  },
];

// ------------------------------------------------------------
//  Places on the map. group: "need" (shops and help), "nice" (treats for
//  her) or "land" (landmarks the walks pass, there to read the map by)
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
  { name: "Cliffe Avenue Park", group: "land", at: [53.84732,-1.77100], note: "The little park five minutes down the road. Start of the bank walk." },
  { name: "Ferniehurst Dell", group: "land", at: [53.84306,-1.76832], note: "Small wooded dell, eight minutes from the door." },
  { name: "Bracken Hall Green", group: "land", at: [53.84881,-1.80456], note: "Top of Shipley Glen. Countryside centre, open ground, dogs everywhere." },
  { name: "Shipley Glen Tramway", group: "nice", at: [53.84399,-1.79250], note: "Little funicular down to Saltaire. Weekends and school holidays. Dogs allowed." },
  { name: "Salts Mill", group: "nice", at: [53.83870,-1.78788], note: "Saltaire. Hockney gallery, a very good bookshop and cafe. Free." },
  { name: "Roberts Park", group: "nice", at: [53.84107,-1.79130], note: "Saltaire. Riverside park, bandstand, cafe. Flat." },
  { name: "Baildon Moor trig point", group: "land", at: [53.85670,-1.78675], note: "The top of everything round here. Big views on a clear day." },
  { name: "Ilkley", group: "nice", at: [53.92479,-1.82129], note: "Twenty minutes on the train from Baildon. Betty's, the Grove, the moor." },
];
