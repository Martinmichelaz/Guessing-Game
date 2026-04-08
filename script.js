let gameName = "guess game";
document.title = gameName;
document.querySelector("h1").textContent = gameName;
document.querySelector("footer").textContent = `${gameName} had made by martin michel`;

const wordsByLength = {
  3: {
    animals:   ["ant","bat","bee","cat","cod","cow","dog","elk","emu","fox"],
    nature:    ["dew","elm","fog","ice","ivy","mud","oak","sea","sky","sun"],
    verbs:     ["cut","dig","eat","fly","get","hit","hop","put","run","sit"],
    objects:   ["bag","bed","box","cup","fan","hat","key","log","map","pen"],
    food:      ["bun","egg","fig","ham","jam","nut","oat","pie","rye","yam"],
    colors:    ["red","tan","teal","nav","mar","blu","yel","gry","blk","wht"],
    jobs:      ["cop","doc","vet","chef","far","law","act","bar","dev","eng"],
    tech:      ["cpu","ram","rom","usb","lan","wan","app","web","bot","net"],
    clothes:   ["cap","hat","tie","fur","zip","hem","rag","saw","coat","wig"],
    emotions:  ["joy","sad","mad","cal","shy","ten","zen","wow","ugh","yay"],
    body:      ["eye","ear","leg","arm","toe","lip","jaw","rib","hip","gum"],
    transport: ["bus","car","van","jet","sub","cab","tax","suv","rig","van"],
    places:    ["sea","bay","inn","bar","gym","spa","lab","zoo","hut","dam"],
    tools:     ["saw","axe","hoe","awl","peg","rod","bit","tap","die","fix"],
    games:     ["tag","uno","ludo","goe","war","bid","set","run","hit","aim"]
  },


  4: {
    fruits:    ["acai","date","kiwi","lime","noni","pear","plum","sloe","ugli","yuzu"],
    countries: ["chad","cuba","fiji","iran","iraq","laos","mali","oman","peru","togo"],
    animals:   ["bear","boar","crab","deer","duck","frog","mole","toad","wolf","wren"],
    sports:    ["dive","golf","judo","kick","luge","polo","race","surf","swim","trek"],
    objects:   ["bell","book","bowl","card","coin","desk","door","drum","flag","lamp"],
    colors:    ["blue","cyan","gold","gray","lime","navy","pink","teal","aqua","beig"],
    jobs:      ["chef","clrk","docu","engi","farm","guard","nurs","pilot","sail","tech"],
    tech:      ["code","data","file","link","node","host","user","root","hash","port"],
    clothes:   ["coat","jean","mask","robe","sock","suit","vest","belt","boot","glov"],
    emotions:  ["calm","fear","hope","love","hate","envy","prid","sham","joys","grin"],
    body:      ["head","hand","foot","back","neck","nose","skin","bone","lung","vein"],
    transport: ["bike","boat","bus ","car ","jeep","taxi","tram","ship","uber","rail"],
    places:    ["city","town","park","mall","cafe","bank","farm","port","camp","yard"],
    tools:     ["dril","hamr","screw","plier","wren","saw ","file","vice","tool","gear"],
    games:     ["chess","ludo","poker","golf","pool","dart","quiz","race","card","dice"]
  },


  5: {
    fruits:    ["apple","berry","dates","grape","guava","lemon","mango","melon","olive","peach"],
    countries: ["china","egypt","ghana","india","italy","japan","kenya","libya","nepal","qatar"],
    animals:   ["camel","cobra","eagle","horse","koala","panda","shark","tiger","viper","zebra"],
    sports:    ["canoe","chess","darts","joust","kayak","relay","rodeo","rugby","skate","vault"],
    colors:    ["beige","black","brown","coral","cream","green","ivory","khaki","lilac","white"],
    jobs:      ["actor","baker","clerk","dancer","pilot","nurse","guard","judge","miner","racer"],
    tech:      ["array","cache","cloud","debug","input","logic","pixel","query","stack","token"],
    clothes:   ["shirt","pants","dress","jeans","skirt","socks","boots","scarf","glove","sweat"],
    emotions:  ["happy","angry","scary","proud","brave","calms","sadly","eager","tired","worst"],
    body:      ["brain","heart","lungs","teeth","mouth","spine","blood","nerve","wrist","ankle"],
    transport: ["truck","train","plane","ferry","metro","cycle","scoot","taxic","cable","rides"],
    places:    ["hotel","house","beach","park ","store","cafe ","plaza","court","field","tower"],
    tools:     ["drill","screw","knife","plier","wrench","hammer","level","chisel","blade","torch"],
    games:     ["chess","cards","poker","bingo","ludo ","draft","guess","match","throw","score"],
    verbs:     ["build","catch","drive","fight","learn","teach","write","watch","break","bring"]
  },


  6: {
    fruits:    ["banana","cherry","durian","feijoa","lychee","medlar","orange","papaya","pomelo","quince"],
    countries: ["brazil","canada","france","greece","israel","jordan","kuwait","mexico","norway","poland"],
    animals:   ["donkey","jaguar","lizard","monkey","oyster","parrot","rabbit","salmon","toucan","turtle"],
    sports:    ["boxing","diving","hockey","karate","racing","rowing","skiing","soccer","squash","tennis"],
    colors:    ["bisque","bronze","cobalt","golden","indigo","maroon","purple","silver","violet","yellow"],
    jobs:      ["doctor","farmer","lawyer","singer","driver","writer","artist","chef  ","dancer","editor"],
    tech:      ["binary","server","router","system","client","backup","script","kernel","python","docker"],
    clothes:   ["jacket","hoodie","sweat","blouse","trouser","uniform","pajama","tshirt","shorts","jersey"],
    emotions:  ["afraid","excited","joyful","lonely","nervou","stress","relief","shamed","prouds","lovely"],
    body:      ["muscle","finger","kidney","tongue","throat","should","breast","artery","pelvis","retina"],
    transport: ["subway","taxies","bicycle","scooter","rocket","airbus","pickup","minibus","sailer","glider"],
    places:    ["school","market","office","garden","museum","cinema","stadium","temple","island","desert"],
    tools:     ["hammer","sawyer","drills","cutter","pliers","wrench","sander","grinder","lathe ","router"],
    games:     ["soccer","tennis","hockey","racing","boxing","karate","skiing","chessy","puzzle","arcade"],
    verbs:     ["create","follow","change","accept","refuse","travel","return","search","choose","expand"]
  },


  7: {
    fruits:    ["apricot","avocado","coconut","currant","kumquat","passion","rhubarb","satsuma","soursop","tangelo"],
    countries: ["albania","algeria","andorra","armenia","austria","bahrain","belarus","bolivia","croatia","denmark"],
    animals:   ["buffalo","dolphin","gorilla","hamster","leopard","lobster","panther","penguin","sparrow","vulture"],
    sports:    ["archery","cricket","cycling","fencing","hurdles","javelin","jogging","sailing","surfing","walking"],
    colors:    ["crimson","emerald","scarlet","mustard","charcol","offwhite","burgund","lavende","seafoam","coralys"],
    jobs:      ["teacher","painter","builder","manager","analyst","designer","farrier","dentist","chemist","pilotss"],
    tech:      ["network","backend","frontend","storage","virtual","cluster","firewall","gateway","browser","hosting"],
    clothes:   ["blazer ","uniform","trench ","kimono ","cardiga","legging","raincoa","overcoa","sweater","jerseys"],
    emotions:  ["anxious","excited","fearful","hopeful","joyfuls","nervous","stresse","worried","calmest","thrills"],
    body:      ["stomach","forearm","eyebrow","eyelash","ankle  ","shouldr","bladder","thyroid","skull  ","tongues"],
    transport: ["airline","railway","subways","tramway","airport","harbour","highway","seaport","station","runways"],
    places:    ["library","airport","college","factory","village","theatre","gallery","parkway","stadium","hostels"],
    tools:     ["toolkit","driller","sawblade","cutters","wrenchs","sanders","grinder","planers","lathe  ","routers"],
    games:     ["cricket","basebal","football","handbal","softbal","bowling","cycling","fencing","surfing","skating"],
    verbs:     ["running","writing","reading","playing","driving","working","helping","talking","walking","calling"]
  },


  8: {
    fruits:    ["bergamot","bilberry","dewberry","mandarin","mulberry","physalis","plantain","rambutan","rosehips","tamarind"],
    countries: ["cambodia","cameroon","colombia","djibouti","dominica","ethiopia","honduras","kiribati","malaysia","mongolia"],
    animals:   ["aardvark","anaconda","anteater","antelope","barnacle","bluebird","cardinal","chipmunk","flamingo","hedgehog"],
    sports:    ["biathlon","canoeing","climbing","football","handball","lacrosse","marathon","shooting","softball","swimming"],
    colors:    ["absolute","abstract","accurate","advanced","affluent","balanced","colorful","colorway","gradient","metallic"],
    jobs:      ["engineer","designer","director","producer","archtect","scientst","lecturer","operator","plumberr","carpentr"],
    tech:      ["database","software","hardware","protocol","internet","compiler","debugger","firewall","terminal","keyboard"],
    clothes:   ["jacketss","trousers","cardigan","raincoat","overcoat","swimsuit","tuxedoes","wardrobe","uniforms","costumes"],
    emotions:  ["happiness","sadnesss","angriness","excitemnt","fearless","hopefull","jealousy","kindness","lonelines","nervousl"],
    body:      ["skeleton","shoulder","forehead","backbone","kneecaps","ligament","cartilag","muscular","arteries","organsss"],
    transport: ["airplane","railroad","seaships","tramways","highways","airports","harbours","runwayss","seaports","vehicles"],
    places:    ["hospital","university","cafeteria","workshop","bookshop","theaters","stadiums","galleries","offices ","museums"],
    tools:     ["drillers","grinders","cuttings","toolkits","machines","hardware","software","devices ","gearsets","fixtures"],
    games:     ["football","baseball","handball","softball","crickety","bowlingg","shooting","climbing","swimming","cyclingg"],
    verbs:     ["creating","learning","teaching","building","drivingg","workingg","helpingg","callingg","readingg","writingg"]
  },


  9: {
    fruits:    ["blueberry","cranberry","pineapple","raspberry","nectarine","persimmon","starfruit","mulberrie","blackcurr","boysenber"],
    countries: ["argentina","australia","indonesia","singapore","venezuela","guatemala","lithuania","nicaragua","slovakiaa","hungaryyy"],
    animals:   ["alligator","crocodile","butterfly","dragonfly","porcupine","wolverine","greyhound","armadillo","kangaroos","elephants"],
    sports:    ["athletics","badminton","motocross","taekwondo","waterpolo","wrestling","gymnasium","freestyle","snowboard","kickboxing"],
    colors:    ["turquoise","chocolate","goldenrod","slategray","royalblue","darkgreen","lightblue","crimsonnn","lavenderr","seagreen"],
    jobs:      ["developer","architect","scientist","mechanic","electricn","plumberrr","designerx","engineerr","operatorr","technicia"],
    tech:      ["algorithm","framework","interface","processor","bandwidth","cybersecu","debugging","rendering","streaming","protocols"],
    clothes:   ["overcoats","sweatpant","jacketsss","uniformss","cardigans","raincoats","wardrobes","swimsuits","costumess","tuxedoesx"],
    emotions:  ["happiness","sadnesses","fearfully","nervously","angriness","excitingly","hopefully","jealousyy","kindnesss","lonelines"],
    body:      ["heartbeat","shoulders","foreheads","backbones","kneecapss","ligaments","cartilage","musculars","arteriess","organssss"],
    transport: ["airplanes","railroads","seashipss","tramwayyy","highwayyy","airportss","harbourss","runwayyyy","seaportss","vehiclesx"],
    places:    ["hospitals","universit","cafeteriaa","workshops","bookshops","theatress","stadiumss","galleriess","officesss","museumsss"],
    tools:     ["drillings","grindings","cuttinggg","toolkitss","machinesx","hardwarex","softwarex","devicesxx","gearsetss","fixturesx"],
    games:     ["footballl","baseballl","handballl","softballl","crickettt","bowlinggg","shootingg","climbingg","swimmingg","cyclinggg"],
    verbs:     ["developing","searching","returning","choosingg","creatingg","learningg","teachingg","buildingg","drivinggg","workinggg"]
  },


  10: {
    fruits:    ["strawberry","watermelon","blackberry","grapefruit","mangosteen","elderberry","gooseberry","cloudberry","loganberry","breadfruit"],
    countries: ["azerbaijan","bangladesh","kyrgyzstan","luxembourg","madagascar","mozambique","tajikistan","uzbekistan","afghanistan","switzerland"],
    animals:   ["chimpanzee","roadrunner","woodpecker","salamander","copperhead","chinchilla","anglerfish","bluebottle","grasshopper","rattlesnake"],
    sports:    ["basketball","volleyball","gymnastics","skateboard","equestrian","dragonboat","cyclocross","paddleball","kettlebell","rappelling"],
    colors:    ["lightgreen","darkviolet","skyblueeee","deepyellow","brightredd","orangetone","softpurple","palegolden","darkorange","lightcoral"],
    jobs:      ["programmer","electrician","mechanical","technician","accountant","consultant","supervisor","researcher","translatorr","journalist"],
    tech:      ["javascript","typescript","deployment","encryption","automation","databasesx","networking","cybersecur","processing","virtualiza"],
    clothes:   ["sweatshirt","tracksuits","jacketsxxx","uniformxxxx","cardiganxx","raincoatsx","overcoatss","swimsuitss","wardrobess","costumesss"],
    emotions:  ["happinesss","sadnesssss","excitement","nervousness","fearlessness","hopefulness","jealousness","kindnessss","lonelinesss","angerlevel"],
    body:      ["circulatory","respirator","digestivee","skeletalls","muscularsy","nervoussys","endocrinee","reproductiv","integument","lymphaticc"],
    transport: ["helicopter","motorcycle","submarines","spaceships","aircraftss","locomotive","hovercraft","jetlinerss","railwayyyy","tramwaysss"],
    places:    ["restaurant","universityy","hospitalss","government","department","laboratory","playground","stadiumsss","bookstoree","supermarke"],
    tools:     ["machineryy","equipmentss","instrument","apparatusss","gearboxesx","workshopsx","toolkitsxxx","hardwaress","softwaress","devicesxxx"],
    games:     ["basketball","volleyball","gymnastics","skateboard","tabletennis","badmintonn","footballlll","handballll","softballll","cricketttt"],
    verbs:     ["developing","processing","generating","calculating","designingg","constructi","implementi","optimizing","analyzingg","debuggingg"]
  }

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

	numberHintsFunction(randomItem);
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
