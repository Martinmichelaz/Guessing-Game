let gameName = "guess game";
document.title = gameName;
document.querySelector("h1").textContent = gameName;
document.querySelector("footer").textContent = `${gameName} had made by martin michel`;

let numberHints = 1;
document.querySelector(".hints").textContent = `${numberHints} hints`;

const wordsByLength = {
  3: [
    "eat","pet","sun","cat","dog","hat","pen","box","car","run",
    "map","bed","cup","toy","key","ice","bat","fan","egg","log",
    "cow","pig","ant","bee","owl","fox","zip","jam","net","rod",
    "sky","sea","ink","lid","pot","rug","sip","tap","van","wet",
    "yak","zen","bud","dew","fig","gum","hut","jet","kit","lap"
  ],
  4: [
    "book","tree","lamp","fish","door","milk","road","wind","star","fire",
    "moon","ship","ring","farm","hill","rock","rain","snow","leaf","sand",
    "coin","desk","bell","card","game","note","wave","ship","bowl","seed",
    "coat","boot","mask","belt","wire","dust","clay","drum","flag","gold",
    "iron","jade","lime","mint","navy","opal","pearl","ruby","silk","wool"
  ],
  5: [
    "apple","table","chair","bread","water","plant","light","stone","smile","train",
    "grape","beach","cloud","river","sweet","spice","sugar","honey","dream","sound",
    "color","shape","flame","brick","steel","glass","clock","radio","phone","watch",
    "shirt","pants","shoes","socks","brush","cream","paste","towel","sheet","cover",
    "candy","juice","lemon","mango","olive","peach","berry","melon","onion","garlic"
  ],
  6: [
    "banana","laptop","pillow","carpet","bottle","flower","window","orange","silver","market",
    "forest","desert","island","valley","stream","bridge","castle","garden","school","office",
    "energy","system","device","screen","camera","sensor","engine","rocket","planet","author",
    "writer","artist","singer","doctor","lawyer","driver","farmer","baker","butter","cheese",
    "yogurt","coffee","syrup","sauce","noodle","cookie","cereal","closet","zipper","mirror"
  ],
  7: [
    "teacher","student","country","picture","morning","freedom","journey","library","science","fashion",
    "weather","culture","history","digital","network","program","project","support","battery","charger",
    "speaker","display","printer","scanner","desktop","storage","adapter","airport","station","highway",
    "railway","traffic","vehicle","bicycle","scooter","airline","grocery","kitchen","bedroom","bathroom",
    "balcony","ceiling","curtain","blanket","cabinet","dresser","protect","chapter","explore","imagine"
  ],
  8: [
    "elephant","computer","building","mountain","painting","language","medicine","internet","sunshine","baseball",
    "football","airplane","notebook","keyboard","software","hardware","database","security","analysis","strategy",
    "training","learning","teaching","research","feedback","planning","thinking","solution","decision","approach",
    "vacation","festival","ceremony","birthday","wedding","holiday","firework","concert","hospital","pharmacy",
    "therapy","surgery","patient","medical","treatment","recovery","organize","complete","describe","standard"
  ],
  9: [
    "education","beautiful","chocolate","newspaper","adventure","wonderful","knowledge","important","happiness","direction",
    "character","framework","component","interface","algorithm","structure","operation","developer","designer","engineer",
    "marketing","promotion","branding","strategy","campaign","audience","customer","business","commerce","industry",
    "inventory","shipping","delivery","tracking","purchase","checkout","discount","feedback","services","products",
    "vacations","locations","mountains","waterfall","landscape","sunflower","blueberry","pineapple","strawcake","cherries"
  ],
  10: [
    "basketball","everything","friendship","helicopter","understand","strawberry","environment","background","foundation","motivation",
    "technology","development","programming","application","integration","automation","innovation","management","leadership","communication",
    "information","generation","processing","connection","experience","improvement","efficiency","performance","optimization","evaluation",
    "transported","celebration","imagination","production","inspection","navigation","calculation","comparison","distribution","expansion",
    "population","government","department","university","laboratory","engineering","architecture","investment","managements","operations"
  ]
};

trysCounter = 1;
const numberTrys = 6;
const allInputsValue = document.querySelectorAll(`.inputs-row-${trysCounter} input`);
inputLinkedWord = [];
randomItem = '';

localStorage.setItem("score", localStorage.getItem("score") || 0);
let scoreP = document.querySelector(".score p");
scoreP.textContent = `your score is : ${localStorage.getItem("score")}`;

let inputNumLetters = document.querySelector("div.num-letters select");

const all = document.createElement("div");
all.classList.add("all");
document.querySelector(".trys-inputs").prepend(all);

inputNumLetters.value = "";

document.querySelector(".check").disabled = true;
document.querySelector(".check").style.cursor = 'none';
document.querySelector(".hints").disabled = true;
document.querySelector(".hints").style.cursor = 'none';

// ===== CREATE INPUTS =====
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

	numberHins(randomItem)
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

function numberHin(gameWord){
	if(gameWord.length >= 6 && gameWord.length < 10 ){
	 numberHints=2
	}else if(gameWord.length == 10){
		numberHints=3
	}
	else{
	 numberHints=1
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


inputNumLetters.addEventListener("input", function () {
  document.querySelector(".check").disabled = false;
  document.querySelector(".check").style.cursor = 'pointer';
  document.querySelector(".hints").disabled = false;
  document.querySelector(".hints").style.cursor = 'pointer';

  inputNumLetters.disabled = true;

  const randomIndex = Math.floor(Math.random() * wordsByLength[inputNumLetters.value].length);
  randomItem = wordsByLength[inputNumLetters.value][+randomIndex];
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
