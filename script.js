let gameName = "guess game";
document.title = gameName;
document.querySelector("h1").textContent = gameName;
document.querySelector("footer").textContent = `${gameName} had made by martin michel`;

const wordsByLength = {

  /* ─────────────────────────────────────────── 3-letter ─── */
  3: {
    animals:   ["ant","bat","bee","cat","cod","cow","dog","elk","emu","fox"],
    nature:    ["dew","elm","fog","ice","ivy","mud","oak","sea","sky","sun"],
    verbs:     ["cut","dig","eat","fly","get","hit","hop","put","run","sit"],
    objects:   ["bag","bed","box","cup","fan","hat","key","log","map","pen"],
    food:      ["bun","egg","fig","ham","jam","nut","oat","pie","rye","yam"],
    colors:    ["red","tan","nav","mar","blu","yel","gry","blk","wht","ros"],
    jobs:      ["cop","doc","vet","far","law","act","bar","dev","eng","dj"],
    tech:      ["cpu","ram","rom","usb","lan","wan","app","web","bot","net"],
    clothes:   ["cap","tie","fur","zip","hem","rag","coat","wig","bra","sox"],
    emotions:  ["joy","sad","mad","shy","ten","zen","wow","ugh","yay","ire"],
    body:      ["eye","ear","leg","arm","toe","lip","jaw","rib","hip","gum"],
    transport: ["bus","car","van","jet","sub","cab","suv","rig","atv","ute"],
    places:    ["bay","inn","gym","spa","lab","zoo","hut","dam","den","pit"],
    tools:     ["saw","axe","hoe","awl","peg","rod","bit","tap","die","pin"],
    games:     ["tag","uno","war","bid","set","aim","go","hex","nim","pit"],

    space:     ["sun","ray","orb","sky","arc","ion","sol","lux","mag","cos",
                 "dim","rot","sat","moo","leo","ari","tau","lib","sco","sag",
                 "cap","aqu","pis","ufo","ast","neb","gal","nep","ura","plu",
                 "mar","jup","ven","ear","mer","cor","pho","tid","vel","pro",
                 "exo","aur","ecl","vac","axl","bla","crb","gem","ort","hel"],

    music:     ["pop","rap","dub","ska","emo","mix","bit","key","tab","amp",
                 "vox","osc","lfo","pan","wav","mid","hit","gig","cue","bow",
                 "bar","cut","set","run","pit","top","bpm","daw","sfz","rif",
                 "arr","duo","sop","alt","ten","bas","cla","sax","tub","lut",
                 "arp","tim","tom","rim","cym","con","sub","hob","col","gtr"],

    science:   ["dna","rna","atp","ion","mol","lab","gel","dye","gas","rem",
                 "ohm","erg","rad","pcr","nmr","sem","tem","afm","xps","gcm",
                 "uva","uvb","uvc","esr","epr","fid","lca","sds","wnt","jak",
                 "ras","myc","jun","fos","src","abl","akt","erk","mek","bax",
                 "bcl","fas","hiv","flu","hpv","rsv","cmv","vzv","hbv","nfk"],

    weather:   ["fog","ice","dew","hum","dry","wet","hot","col","low","jet",
                 "icy","cld","clr","hzy","snw","gst","mst","hze","drz","lgt",
                 "thd","hls","blt","wnd","brz","sqt","stm","frz","rny","trp",
                 "smg","slg","fry","sol","czn","rfr","dss","hrd","dmg","rfl",
                 "flg","tnd","arc","sub","pol","tem","con","wnx","bzy","twn"],
  },

  /* ─────────────────────────────────────────── 4-letter ─── */
  4: {
    fruits:    ["acai","date","kiwi","lime","noni","pear","plum","sloe","ugli","yuzu"],
    countries: ["chad","cuba","fiji","iran","iraq","laos","mali","oman","peru","togo"],
    animals:   ["bear","boar","crab","deer","duck","frog","mole","toad","wolf","wren"],
    sports:    ["dive","golf","judo","kick","luge","polo","race","surf","swim","trek"],
    objects:   ["bell","book","bowl","card","coin","desk","door","drum","flag","lamp"],
    colors:    ["blue","cyan","gold","gray","lime","navy","pink","teal","aqua","beig"],
    jobs:      ["chef","clrk","engi","farm","gurd","nurs","plot","sail","tech","vet"],
    tech:      ["code","data","file","link","node","host","user","root","hash","port"],
    clothes:   ["coat","jean","mask","robe","sock","suit","vest","belt","boot","glov"],
    emotions:  ["calm","fear","hope","love","hate","envy","prid","sham","joys","grin"],
    body:      ["head","hand","foot","back","neck","nose","skin","bone","lung","vein"],
    transport: ["bike","boat","jeep","taxi","tram","ship","rail","buss","van","car"],
    places:    ["city","town","park","mall","cafe","bank","farm","port","camp","yard"],
    tools:     ["dril","hamr","scrw","plir","wrnc","file","vice","gear","brad","pick"],
    games:     ["ches","ludo","pokr","pool","dart","quiz","race","card","dice","bowl"],

    space:     ["star","moon","mars","jove","plut","nept","uran","satu","dark","void",
                 "warp","nova","dust","ring","spin","orbt","pole","flux","wave","beam",
                 "lens","halo","dome","apex","zone","rift","core","mass","grav","worm",
                 "hole","ions","quar","nebu","galx","grvt","tide","phas","ecli","axle",
                 "lune","crat","astr","cosm","sola","luny","puls","comt","exop","intl"],

    music:     ["beat","bass","clef","note","rest","tune","song","jazz","rock","folk",
                 "punk","soul","lyrc","chrd","drum","fife","harp","lute","oboe","tuba",
                 "bell","gong","guit","keys","pian","voce","aria","duet","trio","opus",
                 "coda","alto","solo","vamp","riff","hook","drop","fill","loop","fade",
                 "echo","mute","comp","prog","rave","hymn","flat","shap","mino","majo"],

    science:   ["atom","bond","cell","gene","loci","pore","axon","base","acid","salt",
                 "mole","mass","spin","wave","freq","heat","volt","ohms","watt","flux",
                 "lens","beam","data","test","micr","nano","pico","mega","giga","tera",
                 "chem","phys","biol","geol","math","stat","prob","calc","trig","geom",
                 "vect","matr","diff","expo","simu","logr","intg","frac","qunt","proc"],

    weather:   ["rain","snow","hail","wind","gust","gale","mist","haze","smog","damp",
                 "cold","warm","mild","cool","heat","drgt","flod","tide","surg","swel",
                 "clud","thdr","iced","frst","blzd","temp","pres","humd","rime","dews",
                 "slsh","wntr","sumr","fogx","snxy","rnxy","wnxy","wetx","dryx","hotx",
                 "arcx","polx","subx","trpx","monx","stmx","frnt","ridg","laps","ozon"],
  },

  /* ─────────────────────────────────────────── 5-letter ─── */
  5: {
    fruits:    ["apple","berry","dates","grape","guava","lemon","mango","melon","olive","peach"],
    countries: ["china","egypt","ghana","india","italy","japan","kenya","libya","nepal","qatar"],
    animals:   ["camel","cobra","eagle","horse","koala","panda","shark","tiger","viper","zebra"],
    sports:    ["canoe","chess","darts","joust","kayak","relay","rodeo","rugby","skate","vault"],
    colors:    ["beige","black","brown","coral","cream","green","ivory","khaki","lilac","white"],
    jobs:      ["actor","baker","clerk","dancr","pilot","nurse","guard","judge","miner","racer"],
    tech:      ["array","cache","cloud","debug","input","logic","pixel","query","stack","token"],
    clothes:   ["shirt","pants","dress","jeans","skirt","socks","boots","scarf","glove","sweat"],
    emotions:  ["happy","angry","scary","proud","brave","calms","sadly","eager","tired","worse"],
    body:      ["brain","heart","lungs","teeth","mouth","spine","blood","nerve","wrist","ankle"],
    transport: ["truck","train","plane","ferry","metro","cycle","scoot","blimp","cable","trike"],
    places:    ["hotel","house","beach","parks","store","plaza","court","field","tower","ranch"],
    tools:     ["drill","screw","knife","plier","level","blade","torch","lathe","chisl","grind"],
    games:     ["chess","cards","poker","bingo","draft","guess","match","throw","score","fetch"],
    verbs:     ["build","catch","drive","fight","learn","teach","write","watch","break","bring"],

    space:     ["space","stars","orbit","comet","lunar","solar","venus","earth","pluto","nebul",
                 "qusar","black","giant","super","dwarf","voids","rings","spins","poles","waves",
                 "beams","halos","domes","apexs","zones","rifts","cores","warps","dusts","novas",
                 "pulsr","radii","tidal","light","flare","storm","axial","eclip","wormh","horiz",
                 "event","phase","crust","exopl","astrd","galxy","cosmc","darkm","quant","aster"],

    music:     ["music","beats","basso","notes","tempo","swing","blues","opera","choir","piano",
                 "forte","mezzo","canon","fugue","motet","etude","mazur","polka","waltz","march",
                 "verse","bridg","hooks","drops","fills","loops","fades","echos","mutes","comps",
                 "progs","hymns","flats","sharp","minor","major","triad","octav","scale","pitch",
                 "lyric","chant","indie","synth","disco","house","tonal","modal","score","rondo"],

    science:   ["atoms","bonds","cells","genes","locus","pores","axons","bases","acids","salts",
                 "moles","masss","spins","waves","freqs","heats","volts","watts","fluxs","beams",
                 "micro","nanos","picos","megas","gigas","teras","chems","physx","biolx","geolx",
                 "mathx","stats","probs","calcs","algsx","trigs","geoms","vects","matrs","diffs",
                 "expos","simus","logrs","intgs","fract","quant","procs","specx","datas","tests"],

    weather:   ["foggy","snowy","rainy","windy","gusty","storm","cloud","misty","humid","frost",
                 "blizz","temps","surge","flood","thunr","light","icing","slush","heatw","moist",
                 "front","drier","tidal","ozone","dewpt","polar","tropi","arcti","trade","squal",
                 "monsu","cyclo","antcy","ridge","lapse","inver","adiab","anemo","gales","spout",
                 "spray","salty","brine","hazes","smogs","rains","snows","hails","winds","gusts"],
  },

  /* ─────────────────────────────────────────── 6-letter ─── */
  6: {
    fruits:    ["banana","cherry","durian","feijoa","lychee","medlar","orange","papaya","pomelo","quince"],
    countries: ["brazil","canada","france","greece","israel","jordan","kuwait","mexico","norway","poland"],
    animals:   ["donkey","jaguar","lizard","monkey","oyster","parrot","rabbit","salmon","toucan","turtle"],
    sports:    ["boxing","diving","hockey","karate","racing","rowing","skiing","soccer","squash","tennis"],
    colors:    ["bisque","bronze","cobalt","golden","indigo","maroon","purple","silver","violet","yellow"],
    jobs:      ["doctor","farmer","lawyer","singer","driver","writer","artist","dancer","editor","tailor"],
    tech:      ["binary","server","router","system","client","backup","script","kernel","python","docker"],
    clothes:   ["jacket","hoodie","blouse","shorts","jersey","gloves","tights","poncho","blazer","turban"],
    emotions:  ["joyful","lonely","stress","relief","elated","fright","serene","grumpy","regret","thrill"],
    body:      ["muscle","finger","kidney","tongue","throat","breast","artery","pelvis","retina","cornea"],
    transport: ["subway","bicycle","scootr","rocket","pickup","glider","tanker","ferryb","copter","zeppln"],
    places:    ["school","market","office","garden","museum","cinema","temple","island","desert","harbor"],
    tools:     ["hammer","drills","cutter","pliers","wrench","sander","grindx","chisel","router","scalpel"],
    games:     ["puzzle","arcade","racing","shootr","chessy","boling","skiing","diving","fencng","archry"],
    verbs:     ["create","follow","change","accept","refuse","travel","return","search","choose","expand"],

    space:     ["planet","galaxy","nebula","pulsar","quasar","meteor","cosmos","vortex","corona","photon",
                 "proton","nuclei","plasma","fusion","gravit","orbits","comets","flares","storms","saturn",
                 "uranus","jovian","quarks","bosons","hadron","gluons","zenith","apheli","tidesx","eclips",
                 "warped","darked","baryoz","leptns","mattrx","novasz","dwarfz","giantx","solary","lunary",
                 "galxyz","cosmcz","voidzx","ringzx","pulsax","cometz","crestx","aphelx","perihl","exopln"],

    music:     ["melody","rhythm","chords","treble","octave","bridge","chorus","verses","accent","timbre",
                 "sonata","minuet","fanfar","hymnal","ballad","string","bowing","guitar","violin","cellos",
                 "basses","scales","pitchy","tuning","tempos","swings","bluesy","jazzed","rocked","folked",
                 "punked","souled","operas","choirs","pianos","fortes","mezzos","canons","fugues","motets",
                 "etudes","mazurk","polkas","waltzy","lyrics","chants","indies","synths","discos","houses"],

    science:   ["atomic","proton","photon","quanta","plasma","fusion","nuclei","quarks","bosons","hadron",
                 "gluons","lepton","baryon","enzyme","lipids","sugars","starch","genome","allele","helixs",
                 "chroma","ribose","glucos","fructo","peptid","aminox","purine","pyrimy","adenin","thymin",
                 "guanin","cytosi","uracil","helium","carbon","oxygen","sulfur","phosph","calciu","sodium",
                 "copper","nickel","chrome","potasx","magnsx","zincxx","ironxx","goldxx","silvex","leadxx"],

    weather:   ["stormy","cloudy","frosty","frozen","breezy","squall","dreary","sultry","steamy","flurry",
                 "shower","drizzl","breeze","wintry","autumn","arctic","tropic","typhon","torndo","monsoo",
                 "cyclox","isobar","nimbus","cumulo","status","cirrus","altocx","warmth","sleetx","blizzx",
                 "heatwx","raindx","snowdx","haildx","gustsx","ozonex","humidx","frontx","ridgex","tempex",
                 "wetdax","fogdax","windcx","iceday","sundax","clrday","dryday","hotdax","coldax","rainwx"],
  },

  /* ─────────────────────────────────────────── 7-letter ─── */
  7: {
    fruits:    ["apricot","avocado","coconut","currant","kumquat","passion","rhubarb","satsuma","soursop","tangelo"],
    countries: ["albania","algeria","andorra","armenia","austria","bahrain","belarus","bolivia","croatia","denmark"],
    animals:   ["buffalo","dolphin","gorilla","hamster","leopard","lobster","panther","penguin","sparrow","vulture"],
    sports:    ["archery","cricket","cycling","fencing","hurdles","javelin","jogging","sailing","surfing","walking"],
    colors:    ["crimson","emerald","scarlet","mustard","charcoal","burgund","lavende","seafoam","corally","saffron"],
    jobs:      ["teacher","painter","builder","manager","analyst","designr","farrier","dentist","chemist","surgeon"],
    tech:      ["network","backend","storage","virtual","cluster","firewll","gateway","browser","hosting","servers"],
    clothes:   ["blazers","uniform","trenchs","kimono","cardiga","legging","raincoa","overcoa","sweater","jerseys"],
    emotions:  ["anxious","excited","fearful","hopeful","joyeous","nervous","worried","calmest","thrills","ecstasy"],
    body:      ["stomach","forearm","eyebrow","eyelash","kneecap","shouldr","bladder","thyroid","skullcap","tongues"],
    transport: ["airline","railway","subways","tramway","airport","harbour","highway","seaport","station","runways"],
    places:    ["library","college","factory","village","theatre","gallery","parkway","stadium","hostels","barracks"],
    tools:     ["toolkit","driller","sawblad","cutterx","wrenchs","sanders","grinder","planers","lathexz","routers"],
    games:     ["cricket","basebal","footbal","handbal","softbal","bowling","cycling","fencing","surfing","skating"],
    verbs:     ["running","writing","reading","playing","driving","working","helping","talking","walking","calling"],

    space:     ["planets","galaxys","nebulas","pulsars","quasars","meteors","cometzz","vortexs","coronas","photons",
                 "protons","nucleas","plasmas","fusions","gravitx","orbitls","asterod","auroraz","eclipsz","tidalxx",
                 "solarsz","lunarsz","jovianx","darkmtx","wormhol","horiznx","eventsx","phasesx","crustxx","superxx",
                 "dwarfxx","giantxx","voidzxx","ringzxx","spinzxx","polezxx","wavezxx","beamzxx","halozxx","domezxx",
                 "apexzxx","zonezxx","riftzxx","corezxx","masszxx","warpzxx","dustzxx","novaxxx","cometxx","exoplnx"],

    music:     ["melodyy","rhythms","chordss","trebles","octaves","bridges","choruss","versess","accents","timbres",
                 "sonatas","minuets","fanfare","hymnals","ballads","strings","guitarz","violins","celloss","bassess",
                 "scaless","pitches","tunings","temposm","swingss","bluesky","jazzedx","rockedx","folkedx","punkedx",
                 "souledx","operass","choirss","pianoss","fortess","mezzoss","canonss","fuguess","motetes","etudess",
                 "mazurka","polkass","waltzss","marchss","lyricsx","chantsx","indiess","synthsx","discosx","housess"],

    science:   ["atomics","protons","photons","quantas","plasmas","fusions","nucleas","quarkss","bosonss","hadrons",
                 "gluonss","leptons","baryons","enzymes","lipidss","sugarss","starchs","genomes","alleles","helixss",
                 "chromas","riboses","glucoss","fructos","peptids","aminoss","purines","pyrimys","adenins","thymins",
                 "guanins","cytosin","uracils","heliums","carbons","oxygens","sulfurs","phosphs","calcius","sodiums",
                 "coppers","nickels","chromes","potasxx","magnsxx","zincxxx","ironxxx","goldxxx","silvexz","leadxxx"],

    weather:   ["stormys","cloudys","frostys","frozens","breezys","squalls","drearys","sultrys","steamys","flurrys",
                 "showers","drizzls","breezes","wintrys","autumns","arctics","tropics","typhons","torndos","monsoos",
                 "cyclosx","isobars","nimbusz","cumulox","statusx","cirrusx","altocxr","warmths","sleetxx","blizzxx",
                 "heatwxx","raindxx","snowdxx","haildxx","gustsxx","ozonexx","humidxx","frontxx","ridgexx","tempxxx",
                 "wetdaxx","fogdaxx","windcxx","icedaxx","sundaxx","clrdaxx","drydaxx","hotdaxx","coldaxx","rainwxx"],
  },

  /* ─────────────────────────────────────────── 8-letter ─── */
  8: {
    fruits:    ["bergamot","bilberry","dewberry","mandarin","mulberry","physalis","plantain","rambutan","rosehips","tamarind"],
    countries: ["cambodia","cameroon","colombia","djibouti","dominica","ethiopia","honduras","kiribati","malaysia","mongolia"],
    animals:   ["aardvark","anaconda","anteater","antelope","barnacle","bluebird","cardinal","chipmunk","flamingo","hedgehog"],
    sports:    ["biathlon","canoeing","climbing","football","handball","lacrosse","marathon","shooting","softball","swimming"],
    colors:    ["burgundy","charcoal","obsidian","cerulean","viridian","lavender","mahogany","platinum","sapphire","vermilion"],
    jobs:      ["engineer","designer","director","producer","architct","scientst","lecturer","operator","plumberr","carpentr"],
    tech:      ["database","software","hardware","protocol","internet","compiler","debugger","firewall","terminal","keyboard"],
    clothes:   ["jacketss","trousers","cardigan","raincoat","overcoat","swimsuit","tuxedoes","wardrobe","uniforms","costumes"],
    emotions:  ["hapiness","sadnesss","excitemnt","fearless","hopefull","jealousy","kindness","lonlines","nervousl","angrines"],
    body:      ["skeleton","shoulder","forehead","backbone","kneecaps","ligament","cartilag","muscular","arteries","organssz"],
    transport: ["airplane","railroad","seaships","tramways","highways","airports","harbours","seaports","vehicles","monorail"],
    places:    ["hospital","universy","workshop","bookshop","theaters","stadiums","galleris","museums","barracks","fortress"],
    tools:     ["drillers","grinders","cuttings","toolkits","machines","hardware","gearsets","fixtures","clampset","chiseled"],
    games:     ["football","baseball","handball","softball","crickety","bowlingg","shooting","climbing","swimming","cyclingg"],
    verbs:     ["creating","learning","teaching","building","drivings","workings","helpings","callings","readings","writings"],

    space:     ["asteroid","blackhol","cosmolgy","galaxies","nebulase","pulsarss","quasarss","meteoric","vortexes","photonic",
                 "protonic","nuclears","plasmoid","fusionss","gravitys","orbitals","cometoid","aurorase","eclipsed","solarsys",
                 "lunarcyc","jovianbd","darkmatt","exoplane","intrstlr","cosmicry","wormhole","horizons","eventhzn","phasstrn",
                 "crustaex","superntx","dwarfstr","giantstr","voidzone","ringzone","spinzone","polezone","wavezone","beamzone",
                 "halozone","domezone","apexzone","riftzbox","corezone","masszone","warpzone","dustzone","exomoons","orbiters"],

    music:     ["melodics","rhythmic","harmonic","treblest","octaveds","bridging","choruses","versally","accentsd","timbrely",
                 "sonatans","minuetss","fanfares","hymnally","ballades","stringed","guitared","violined","celloing","bassings",
                 "scalings","pitching","tuningss","tempoesd","swingeds","bluesing","jazziest","rockster","folkiest","punkster",
                 "soulster","operatic","choiring","pianoist","fortessi","mezzoist","canonist","fughtest","motetext","etudeing",
                 "mazurkas","polkaing","waltzing","marching","lyricism","chanting","indieing","synthpop","discoing","houseing"],

    science:   ["atomical","protonss","photonss","quantums","plasmoid","fusionss","nuclears","quarkdom","bosonics","hadronix",
                 "gluonics","leptonic","baryonic","enzymate","lipidics","sugarics","starchic","genomics","allelics","helixing",
                 "chromads","ribosome","glucosed","fructose","peptides","aminoics","purining","pyrimidx","adenosix","thyminic",
                 "guaninex","cytosing","uracilss","heliumss","carbonsz","oxygenss","sulfuric","phosphic","calciumx","sodiumsx",
                 "coppersx","nickelsx","chromicx","potassix","magnesix","zincixx","ironicxx","goldicxx","silveric","leadicxx"],

    weather:   ["stormily","cloudily","frostily","frozenxx","breezily","squallly","drearily","sultrily","steamils","flurrily",
                 "showered","drizzled","breezing","wintrily","autumnal","arcticly","tropicly","typhonic","tornadox","monsoony",
                 "cyclonic","isobaric","nimbused","cumuloid","statusly","cirrusly","altocirx","warmthly","sleeting","blizzard",
                 "heatwave","raindrop","snowfall","hailstom","guststor","ozonated","humidite","frontaly","ridgedly","tempedly",
                 "wetdayix","fogdayix","windchix","icedayix","sundayix","clrdayix","drydayix","hotdayix","colddayx","rainwatx"],
  },

  /* ─────────────────────────────────────────── 9-letter ─── */
  9: {
    fruits:    ["blueberry","cranberry","pineapple","raspberry","nectarine","persimmon","starfruit","mulberrie","blackcurr","boysenber"],
    countries: ["argentina","australia","indonesia","singapore","venezuela","guatemala","lithuania","nicaragua","slovakiax","hungarian"],
    animals:   ["alligator","crocodile","butterfly","dragonfly","porcupine","wolverine","greyhound","armadillo","kangaroos","elephants"],
    sports:    ["athletics","badminton","motocross","taekwondo","waterpolo","wrestling","gymnasium","freestyle","snowboard","kickboxng"],
    colors:    ["turquoise","chocolate","goldenrod","slategray","royalblue","darkgreen","lightblue","crimsonly","lavenders","seagreens"],
    jobs:      ["developer","architect","scientist","mechanics","electricn","plumberrr","engineerr","operatorr","technicin","professor"],
    tech:      ["algorithm","framework","interface","processor","bandwidth","cybersecu","debugging","rendering","streaming","protocols"],
    clothes:   ["overcoats","sweatpant","jacketsss","uniformss","cardigans","raincoats","wardrobes","swimsuits","costumess","tuxedoesx"],
    emotions:  ["happiness","sadnesses","fearfully","nervously","angriness","excitedly","hopefully","jealously","kindnesss","lonliness"],
    body:      ["heartbeat","shoulders","foreheads","backbones","kneecapss","ligaments","cartilage","musculars","arteriess","organssss"],
    transport: ["airplanes","railroads","seashipss","tramwayss","highwayss","airportss","harbourss","runwayyyy","seaportss","vehiclesx"],
    places:    ["hospitals","universit","cafeteria","workshops","bookshops","theatress","stadiumss","galleries","officesss","museumsss"],
    tools:     ["drillings","grindings","cuttinggg","toolkitss","machinexs","hardwarex","softwarex","devicesxx","gearsetss","fixturesx"],
    games:     ["footballl","baseballl","handballl","softballl","crickettt","bowlinggg","shootingg","climbingg","swimmingg","cyclinggg"],
    verbs:     ["developng","searching","returning","choosingg","creatingg","learningg","teachingg","buildingg","drivinggg","workinggg"],

    space:     ["asteroids","blackhole","cosmology","galaxiess","nebulases","pulsarsss","quasarsss","meteorics","vortexess","photonics",
                 "protonics","nuclearse","plasmoids","gravitons","orbitalsz","cometsoid","aurorasez","eclipseds","solarsysm","lunarcycl",
                 "jovianbdd","darkmattr","exoplanet","intrstllr","cosmicray","wormholes","horizoneq","eventhrzn","phasestrs","crustaxyz",
                 "superntxx","dwarfstrs","giantstrs","voidzones","ringzones","spinzones","polezones","wavezones","beamzones","halozones",
                 "domezones","apexzones","riftzboxz","corezones","masszones","warpzones","dustzones","exomoonss","orbitersz","astroblst"],

    music:     ["melodicss","rhythmica","harmonics","treblests","octavedly","bridgings","chorusses","versallys","accenteds","timbredly",
                 "sonatansz","minuetsse","fanfaress","hymnallyz","balladess","stringeds","guitaredx","violinedx","celloings","basingly",
                 "scalingss","pitchings","tuningssz","tempoedsz","swingedly","bluesings","jazziests","rocksters","folkiests","punksters",
                 "soulsters","operatics","choirings","pianoists","fortessiz","mezzoists","canonists","fughests","motetexts","etudingss",
                 "mazurkass","polkaings","waltzings","marchings","lyricisms","chantings","indieingg","synthpops","discoings","houseings"],

    science:   ["atomicals","protonics","photonics","quantumsz","plasmoids","fusionics","nuclearse","quarkdoms","bosonicsz","hadronics",
                 "gluonixcs","leptonics","baryonics","enzymates","lipidicss","sugaricss","starchics","genomicsz","allelicss","helixings",
                 "chromadsz","ribosomes","glucoseds","fructoses","peptidess","aminoicss","puriningg","pyrimidxs","adenosixs","thyminics",
                 "guaninexs","cytosingg","uracilsss","heliumsss","carbonszz","oxygensss","sulfurics","phosphics","calciummx","sodiumsxx",
                 "coppersxx","nickelsxx","chromicxx","potassixs","magnesixs","zincixxxs","ironicxxx","goldicxxx","silvericx","leadicxxx"],

    weather:   ["stormilys","cloudilys","frostilys","frozenxxx","breezilys","squallsly","drearilyy","sultrilly","steamills","flurrilys",
                 "showerinx","drizzledx","breezings","wintrilys","autumnals","arctically","tropicall","typhonics","tornadoes","monsoonal",
                 "cyclonics","isobarics","nimbusesd","cumuloids","statuslys","cirruslys","altocirxs","warmthlyy","sleetings","blizzards",
                 "heatwaves","raindrops","snowfalls","hailstoms","guststors","ozonation","humiditic","frontalys","ridgedly","tempedlys",
                 "wetdayixs","fogdayixs","windchixs","icedayixs","sundayixs","clrdayixs","drydayixs","hotdayixs","colddayxs","rainwatrs"],
  },

  /* ─────────────────────────────────────────── 10-letter ─── */
  10: {
    fruits:    ["strawberry","watermelon","blackberry","grapefruit","mangosteen","elderberry","gooseberry","cloudberry","loganberry","breadfruit"],
    countries: ["azerbaijan","bangladesh","kyrgyzstan","luxembourg","madagascar","mozambique","tajikistan","uzbekistan","afghanistan","switzerland"],
    animals:   ["chimpanzee","roadrunner","woodpecker","salamander","copperhead","chinchilla","anglerfish","bluebottle","grasshopr","rattlesnke"],
    sports:    ["basketball","volleyball","gymnastics","skateboard","equestrian","dragonboat","cyclocross","paddleball","kettlebell","rappelling"],
    colors:    ["lightgreen","darkviolet","skyblueeem","deepyellow","brightreds","orangetone","softpurple","palegolden","darkorange","lightcoral"],
    jobs:      ["programmer","electricin","mechanical","technician","accountant","consultant","supervisor","researcher","translator","journalist"],
    tech:      ["javascript","typescript","deployment","encryption","automation","databasexx","networking","cybersecur","processing","virtualiza"],
    clothes:   ["sweatshirt","tracksuits","jacketsxxx","uniformxxx","cardiganxx","raincoatsx","overcoatss","swimsuitss","wardrobess","costumesss"],
    emotions:  ["happinessx","sadnesssss","excitement","nervousnes","fearlessns","hopefulness","jealousnes","kindnessss","loneliness","angerlevel"],
    body:      ["circulatry","respirator","digestivex","skeletalss","muscularsy","nervoussys","endocrinex","reproductv","integumntx","lymphaticz"],
    transport: ["helicopter","motorcycle","submarines","spaceships","aircraftss","locomotive","hovercraft","jetlinerss","railwayyyy","tramwaysss"],
    places:    ["restaurant","university","hospitalss","government","department","laboratory","playground","stadiumsss","bookstoree","supermarke"],
    tools:     ["machineryy","equipments","instrument","apparatusx","gearboxesx","workshopsx","toolkitsxx","hardwaress","softwaress","devicesxxx"],
    games:     ["basketball","volleyball","gymnastics","skateboard","tabletenis","badmintonx","footballll","handballll","softballll","cricketlll"],
    verbs:     ["developing","processing","generating","calculatng","designingg","constructi","implementi","optimizing","analyzingg","debuggingg"],

    space:     ["asteroidss","blackholes","cosmologys","galaxiesss","nebulaesss","pulsarssss","quasarssss","meteorites","vortexesss","photonicsz",
                 "protonicsz","nuclearses","plasmoidss","gravitonss","orbitalszs","cometsoids","aurorasezs","eclipsedss","solarsysms","lunarcycls",
                 "jovianbeds","darkmattrx","exoplanets","intrstllrs","cosmicrays","wormholess","horizoneqs","eventhrzns","phasestrsz","crustaxyzs",
                 "supernovas","dwarfstrsz","giantstrsz","voidzonexs","ringzonexs","spinzonexs","polezonexs","wavezonexs","beamzonexs","halozonexs",
                 "domezonexs","apexzonexs","riftzboxzs","corezonexs","masszonexs","warpzonexs","dustzonexs","exomoonssz","orbitersss","astroblsts"],

    music:     ["melodicaly","rhythmical","harmonical","treblestsz","octavingly","bridgingly","chorusedsz","versallysz","accentedly","timbredlys",
                 "sonatansss","minuetssss","fanfaresss","hymnallyss","balladessz","stringedly","bowingszsz","guitaredly","violinedly","celloingly",
                 "bassinglys","scalingssz","pitchingly","tuningssss","tempoedssz","swingingly","bluesingss","jazziedsts","rockstrsss","folkiestsz",
                 "punkstrsss","soulstrsss","operatical","choiringss","pianoistss","fortessizs","mezzoistss","canonistss","fughestsss","motetextss",
                 "etudingssz","mazurkasss","polkaingss","waltzingly","marchingly","lyricismss","chantingly","indieingss","synthpopss","discoinggs"],

    science:   ["atomicallx","protonicsz","photonicsz","quantumsss","plasmoidss","fusionicsz","nuclearsex","quarkdomss","basonicsss","hadronicsz",
                 "gluonixcss","leptonicsz","baryonicsz","enzymatess","lipidicsss","sugaricsse","starchicss","genomicsss","allelicssz","helixingss",
                 "chromadsss","ribosomess","glucosedss","fructosess","peptidessz","aminoicsss","puriningss","pyrimidxss","adenosixss","thyminicss",
                 "guaninexss","cytosingss","uracilssss","heliumssss","carbonszss","oxygenssss","sulfuricsz","phosphicss","calciumxxs","sodiumsxxs",
                 "coppersxxs","nickelsxxs","chromicxxs","potassixss","magnesixss","zincicsxss","ironicxxss","goldicxxss","silvericss","leadicxxss"],

    weather:   ["stormilysz","cloudilysz","frostilysz","frozennnxx","breezilysz","squallslys","drearilyss","sultrillyy","steamillss","flurrilysz",
                 "showeringx","drizzledsz","breezingss","wintrillyy","autumnalss","arctically","tropically","typhonicsz","tornadoesz","monsoonals",
                 "cyclonicsz","isobaricsz","nimbusesdz","cumuloidss","statuslyss","cirruslyss","altocirxss","warmthlysz","sleetingly","blizzardss",
                 "heatwavess","raindropsz","snowfallss","hailstomss","guststorss","ozonations","humiditicx","frontallys","ridginglyy","tempedlyss",
                 "wetdayixss","fogdayixss","windchixss","icedayixss","sundayixss","clrdayixss","drydayixss","hotdayixss","colddayxss","rainwatrss"],
  },

};

trysCounter = 1;
const numberTrys = 6;
const allInputsValue = document.querySelectorAll(`.inputs-row-${trysCounter} input`);
inputLinkedWord = [];
randomItem = '';
typeSelectorValue= ''
localStorage.setItem("score", localStorage.getItem("score") || 0);

let scoreP = document.querySelector(".score p");
scoreP.textContent = `your score is : ${localStorage.getItem("score")}`;

let inputNumLetters = document.querySelector("div.num-letters #numbers");

let inputTypeWord = document.querySelector("div.num-letters #type");

const all = document.createElement("div");
all.classList.add("all");
document.querySelector(".trys-inputs").prepend(all);

inputNumLetters.value = "";
inputTypeWord.value = "";

document.querySelector(".check").disabled = true;
document.querySelector(".check").style.cursor = 'none';
document.querySelector(".hints").disabled = true;
document.querySelector(".hints").style.cursor = 'none';

function creatingInputs(randomItem) {
  const inputsRow = document.createElement("div");
  inputsRow.classList.add("inputs-row");
  inputsRow.classList.add(`inputs-row-${trysCounter}`);

  let span = document.createElement("span");
  span.classList.add("try");
  span.textContent = `try ${trysCounter} :`;
  inputsRow.appendChild(span);

  document.querySelector(".trys-inputs .all").append(inputsRow);

  for (let i = 0; i < randomItem.length; i++) {
    const letterDiv = document.createElement("div");
    letterDiv.className = `letter-${i}`;

    const input = document.createElement("input");
    input.type = "text";
    input.setAttribute('maxlength', '1');

    input.addEventListener("input", function () {
      if (this.value.length === 1) {
        const nextDiv = letterDiv.nextElementSibling;
        if (nextDiv && nextDiv.querySelector("input")) {
          nextDiv.querySelector("input").focus();
        }
      }
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Backspace" && this.value.length === 0) {
        const prevDiv = letterDiv.previousElementSibling;
        if (prevDiv && prevDiv.classList.contains && prevDiv.querySelector && prevDiv.querySelector("input")) {
          prevDiv.querySelector("input").focus();
        }
      }
    });

    letterDiv.appendChild(input);
    inputsRow.appendChild(letterDiv);
  }


  document.querySelector(`.inputs-row-${trysCounter}
	input:nth-child(1)`).focus();

}
function valuesInputsAndCheck(gameWord) {
  inputLinkedWord = [];
  const allInputsValue = document.querySelectorAll(`.inputs-row-${trysCounter} input`);

  for (let i = 0; i < allInputsValue.length; i++) {
    const smallValue = allInputsValue[i].value.toLowerCase();
    inputLinkedWord.push(smallValue);

    const inputEl = document.querySelector(`.inputs-row-${trysCounter} div.letter-${i} input`);

    if (gameWord.search(smallValue) === -1) {
      inputEl.classList.add('red');
    } else if (
      gameWord.search(smallValue) !== -1 &&
      gameWord.split('').includes(smallValue) &&
      smallValue != gameWord.split('')[i]
    ) {
      inputEl.classList.add('orange');
    } else if (
      gameWord.search(smallValue) !== -1 &&
      smallValue == gameWord.split('')[i]
    ) {
      inputEl.classList.add('green');
    }

    inputEl.disabled = true;
  }
  trysCounter += 1;
}

function numberHintsFunction(gameWord){
	if(gameWord.length >= 6 && gameWord.length < 10 ){
	 numberHints=2;
	}else if(gameWord.length === 10){
		numberHints=3;
	}
	else{
	 numberHints=1;
	}
	document.querySelector(".hints").textContent=`${numberHints} hints`;
}

function creatingMessage(element, pColor, text) {
  element.style.position = 'fixed';
  element.style.left = '50%';
  element.style.top = '50%';
  element.style.transform = 'translate(-50%,-50%)';
  element.style.zIndex = '1000';

  element.style.backgroundColor = 'rgba(15,23,42,0.98)';
  element.style.border = '1px solid #38bdf8';
  element.style.padding = '40px 30px 30px';
  element.style.borderRadius = '16px';
  element.style.boxShadow = '0 8px 40px rgba(0,0,0,0.6)';
  element.style.textAlign = 'center';
  element.style.width = 'min(90vw, 420px)';
  element.style.minHeight = '200px';
  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.justifyContent = 'center';
  element.style.alignItems = 'center';
  element.style.gap = '16px';

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-btn');
  closeBtn.innerText = '✕';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '10px';
  closeBtn.style.right = '10px';
  closeBtn.style.backgroundColor = '#ef4444';
  closeBtn.style.color = 'white';
  closeBtn.style.width = '30px';
  closeBtn.style.height = '30px';
  closeBtn.style.display = 'flex';
  closeBtn.style.alignItems = 'center';
  closeBtn.style.justifyContent = 'center';
  closeBtn.style.borderRadius = '50%';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontSize = '14px';
  closeBtn.style.fontWeight = 'bold';

  closeBtn.onclick = function () {
    element.remove();
    document.querySelector('body header').style.opacity = '1';
    document.querySelector('body main').style.opacity = '1';
    document.querySelector('body footer').style.opacity = '1';
  };

  const p = document.createElement('p');
  p.innerText = text;
  p.style.fontSize = 'clamp(14px, 3.5vw, 18px)';
  p.style.color = pColor;
  p.style.fontWeight = '800';
  p.style.lineHeight = '1.5';

  element.append(closeBtn);
  element.append(p);
  document.body.append(element);
}

function wining() {
  removeAllForMessage();
  const winingMessage = document.querySelector('main .message');
  creatingMessage(winingMessage, '#22c55e', '🎉 Congratulations! You nailed it! You guessed the word correctly');
  playAgain();
  localStorage.setItem("score", Number(localStorage.getItem("score")) + 10);
  scoreP.textContent = `your score is : ${localStorage.getItem("score")}`;
  document.querySelector(".check").disabled = true;
  document.querySelector(".check").style.cursor = 'none';
  
  document.querySelector(".hints").disabled = true;
  document.querySelector(".hints").style.cursor = 'none';
}

function losing() {
  removeAllForMessage();
  const losingMessage = document.querySelector('main .message');
  creatingMessage(losingMessage, '#ef4444', `😅 Nice try — don't give up! The word was "${randomItem}"`);
  playAgain();
  localStorage.setItem("score", 0);
  scoreP.textContent = `your score is : ${localStorage.getItem("score")}`;
  document.querySelector(".check").disabled = true;
document.querySelector(".check").style.cursor = 'none';
document.querySelector(".hints").disabled = true;
document.querySelector(".hints").style.cursor = 'none';
}

function playAgain() {
  const playAgainBtn = document.createElement('button');
  playAgainBtn.innerText = "Play Again";
  playAgainBtn.style.padding = '12px 30px';
  playAgainBtn.style.fontSize = 'clamp(14px, 3vw, 18px)';
  playAgainBtn.style.fontWeight = 'bold';
  playAgainBtn.style.color = '#fff';
  playAgainBtn.style.background = 'linear-gradient(135deg, #00c853, #64dd17)';
  playAgainBtn.style.border = 'none';
  playAgainBtn.style.borderRadius = '30px';
  playAgainBtn.style.cursor = 'pointer';
  playAgainBtn.style.boxShadow = '0 5px 15px rgba(0,200,83,0.4)';
  playAgainBtn.style.transition = '0.3s ease';

  playAgainBtn.addEventListener('mouseenter', () => {
    playAgainBtn.style.transform = 'scale(1.1)';
    playAgainBtn.style.boxShadow = '0 8px 20px rgba(0,200,83,0.6)';
  });
  playAgainBtn.addEventListener('mouseleave', () => {
    playAgainBtn.style.transform = 'scale(1)';
    playAgainBtn.style.boxShadow = '0 5px 15px rgba(0,200,83,0.4)';
  });
  playAgainBtn.addEventListener('click', () => { location.reload(); });
  document.querySelector(".message").appendChild(playAgainBtn);
}

function removeAllForMessage() {
  document.querySelector('body header').style.opacity = '0.3';
  document.querySelector('body main').style.opacity = '0.3';
  document.querySelector('body footer').style.opacity = '0.3';
}

inputNumLetters.disabled = true;

inputTypeWord.addEventListener("input", function () {
  inputTypeWord.disabled = true;
  inputNumLetters.disabled = false;
  typeSelectorValue= inputTypeWord.value;
});


inputNumLetters.addEventListener("input", function () {
  document.querySelector(".check").disabled = false;
  document.querySelector(".check").style.cursor = 'pointer';
  document.querySelector(".hints").disabled = false;
  document.querySelector(".hints").style.cursor = 'pointer';

  inputNumLetters.disabled = true;

  const randomIndex = Math.floor(Math.random()
  *wordsByLength[inputNumLetters.value][typeSelectorValue].length);
  randomItem = wordsByLength[inputNumLetters.value][typeSelectorValue][+randomIndex];
  creatingInputs(randomItem);
  numberHintsFunction(randomItem);
});

document.querySelector(".check").addEventListener("click", function () {
  const allInputsValue = document.querySelectorAll(`.inputs-row-${trysCounter} input`);
  let allInputsFilled = true;

  for (let i = 0; i < allInputsValue.length; i++) {
    if (allInputsValue[i].value.length === 0) {
      allInputsFilled = false;
    }
  }

  if (allInputsFilled === true) {
    valuesInputsAndCheck(randomItem);

    if (inputLinkedWord.join('') === randomItem && trysCounter <= numberTrys) {
      wining();
    } else if (inputLinkedWord.join('') !== randomItem && trysCounter < numberTrys) {
      creatingInputs(randomItem);

      for (let i = 0; i < document.querySelectorAll(`.inputs-row-${trysCounter} input`).length; i++) {
        const prevInput = document.querySelector(`.inputs-row-${trysCounter - 1} div.letter-${i} input`);
        const currInput = document.querySelector(`.inputs-row-${trysCounter} div.letter-${i} input`);

        if (prevInput && prevInput.classList.contains('green') && currInput) {
          currInput.value = prevInput.value;
          currInput.classList.add('green');
          currInput.disabled = true;
        }
      }
    } else if (inputLinkedWord.join('') !== randomItem && trysCounter === numberTrys) {
      losing();
    }
  } else {
    removeAllForMessage();
    const warningInputsEmpty = document.createElement('div');
    warningInputsEmpty.classList.add('warning-inputs-empty');
    creatingMessage(warningInputsEmpty, '#ef4444', 'Don\'t leave any input empty!');
  }
});

document.querySelector(".hints").addEventListener("click", function () {
  if (numberHints > 0) {
    const randomInputToHint = Math.floor(Math.random() * randomItem.length);
    const hintInput = document.querySelector(`.inputs-row-${trysCounter} div.letter-${randomInputToHint} input`);

    if (hintInput && !hintInput.classList.contains("green")) {
      hintInput.value = randomItem[randomInputToHint];
      hintInput.classList.add("green");
      --numberHints;
      hintInput.disabled = true;
    }
  } else {
    const warningHintsFinished = document.createElement('div');
    warningHintsFinished.classList.add('hints-warning');
    removeAllForMessage();
    creatingMessage(warningHintsFinished, '#ef4444', 'Your hints have finished!');
  }

  document.querySelector(".hints").textContent = `${numberHints} hints`;
});
