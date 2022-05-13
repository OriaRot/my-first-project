const board = document.getElementById("board");
const player = document.getElementById("ipt");
const player1 = document.getElementById("ipt2");
const start = document.getElementById("btn");
const names = document.getElementById("names");
const disapear = document.getElementById("before");
const all = document.getElementById("all");
const audioFiles = [
  new Audio("A.mp3"),
  new Audio("B.mp3"),
  new Audio("C.mp3"),
  new Audio("D.mp3"),
  new Audio("E.mp3"),
  new Audio("F.mp3"),
  new Audio("G.mp3"),
  new Audio("H.mp3"),
  new Audio("I.mp3"),
  new Audio("J.mp3"),
  new Audio("K.mp3"),
  new Audio("L.mp3"),
  new Audio("M.mp3"),
  new Audio("N.mp3"),
  new Audio("O.mp3"),
  new Audio("P.mp3"),
  new Audio("Q.mp3"),
  new Audio("R.mp3"),
  new Audio("S.mp3"),
  new Audio("T.mp3"),
  new Audio("U.mp3"),
  new Audio("V.mp3"),
  new Audio("W.mp3"),
  new Audio("X.mp3"),
  new Audio("Y.mp3"),
  new Audio("Z.mp3"),
];
const claps = new Audio("claps.mp3");
let cnt = 0;
let cnt2 = 0;
let temp = [];
let element;
let elem;
let elem1;
let firstOrSecond = "f";
function createCards(card, id, audio) {
  return {
    card,
    id,
    audio,
  };
}
let cards = [
  createCards("a", 1, audioFiles[0]),
  createCards("A", 1, audioFiles[0]),
  createCards("b", 2, audioFiles[1]),
  createCards("B", 2, audioFiles[1]),
  createCards("c", 3, audioFiles[2]),
  createCards("C", 3, audioFiles[2]),
  createCards("d", 4, audioFiles[3]),
  createCards("D", 4, audioFiles[3]),
  createCards("e", 5, audioFiles[4]),
  createCards("E", 5, audioFiles[4]),
  createCards("f", 6, audioFiles[5]),
  createCards("F", 6, audioFiles[5]),
  createCards("g", 7, audioFiles[6]),
  createCards("G", 7, audioFiles[6]),
  createCards("h", 8, audioFiles[7]),
  createCards("H", 8, audioFiles[7]),
  createCards("i", 9, audioFiles[8]),
  createCards("I", 9, audioFiles[8]),
  createCards("j", 10, audioFiles[9]),
  createCards("J", 10, audioFiles[9]),
  createCards("k", 11, audioFiles[10]),
  createCards("K", 11, audioFiles[10]),
  createCards("l", 12, audioFiles[11]),
  createCards("L", 12, audioFiles[11]),
  createCards("m", 13, audioFiles[12]),
  createCards("M", 13, audioFiles[12]),
  createCards("n", 14, audioFiles[13]),
  createCards("N", 14, audioFiles[13]),
  createCards("o", 15, audioFiles[14]),
  createCards("O", 15, audioFiles[14]),
  createCards("p", 16, audioFiles[15]),
  createCards("P", 16, audioFiles[15]),
  createCards("q", 17, audioFiles[16]),
  createCards("Q", 17, audioFiles[16]),
  createCards("r", 18, audioFiles[17]),
  createCards("R", 18, audioFiles[17]),
  createCards("s", 19, audioFiles[18]),
  createCards("S", 19, audioFiles[18]),
  createCards("t", 20, audioFiles[19]),
  createCards("T", 20, audioFiles[19]),
  createCards("u", 21, audioFiles[20]),
  createCards("U", 21, audioFiles[20]),
  createCards("v", 22, audioFiles[21]),
  createCards("V", 22, audioFiles[21]),
  createCards("w", 23, audioFiles[22]),
  createCards("W", 23, audioFiles[22]),
  createCards("x", 24, audioFiles[23]),
  createCards("X", 24, audioFiles[23]),
  createCards("y", 25, audioFiles[24]),
  createCards("Y", 25, audioFiles[24]),
  createCards("z", 26, audioFiles[25]),
  createCards("Z", 26, audioFiles[25]),
];
function createRandomNumber() {
  let randomNumber = Math.round(Math.random() * (cards.length - 1));
  return randomNumber;
}
function shuffle() {
  for (let i = 0; i < 100; i++) {
    let place1 = createRandomNumber();
    let place2 = createRandomNumber();

    let temp = cards[place1];
    cards[place1] = cards[place2];
    cards[place2] = temp;
  }
  return cards;
}
let check = 0;
function createBoard() {
  cards.forEach((item) => {
    element = document.createElement("div");
    element.innerText = item.card;
    board.appendChild(element);
    element.className = `card ${item.id} hidden img`;
    element.id = item.id;
    element.onclick = click;
  });
}

function click(e) {
  e.target.classList.remove("hidden");
  e.target.onclick = noClick;
  temp.push(e.target.id);
  cards.find((item) => item.id == e.target.id).audio.play();
  let firstCard = document.getElementsByClassName(temp[0]);
  if (temp.length > 1) {
    if (temp[0] == temp[1]) {
      if (firstOrSecond == "f") {
        cnt += 10;
        elem.innerText = `${player.value}:${cnt}`;
        claps.play();
      } else {
        cnt2 += 10;
        elem1.innerText = `${player1.value}:${cnt2}`;

        claps.play();
      }
      setTimeout(() => {
        e.target.classList.remove("card");
        e.target.classList.add("hidden");
        e.target.classList.remove("img");
        for (i of firstCard) {
          i.classList.remove("card");
          i.classList.add("hidden");
          i.classList.remove("img");
        }
      }, 1000);

      temp = [];
    } else {
      if (firstOrSecond == "f") {
        firstOrSecond = "s";
        elem.classList.replace("active", "not-active");
        elem1.classList.replace("not-active", "active");
      } else {
        firstOrSecond = "f";
        elem.classList.replace("not-active", "active");
        elem1.classList.replace("active", "not-active");
      }
      setTimeout(() => {
        e.target.onclick = click;
        e.target.classList.add("hidden");
        for (i of firstCard) {
          i.onclick = click;
          i.classList.add("hidden");
          temp = [];
        }
      }, 1000);
    }
    endGame();
  }
}
function endGame() {
  let winner;
  cnt > cnt2
    ? (winner = `The winner is ${elem.innerText} points earned`)
    : (winner = `The winner is ${elem1.innerText} points earned`);
  if (cnt + cnt2 == 260) {
    board.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = winner;
    board.className = "winner";
    board.appendChild(h1);
  }
}

function noClick() {}
start.onclick = startGame;
start.onmouseover = function () {
  new Audio("start.mp3").play();
};
function startGame() {
  elem = document.createElement("h4");
  elem1 = document.createElement("h4");
  elem.className = "player-name active";
  elem1.className = "player-name not-active";
  elem.innerText = `${player.value}:${cnt}`;
  elem1.innerText = `${player1.value}:${cnt2}`;
  names.appendChild(elem);
  names.appendChild(elem1);
  disapear.className = "go-away";
  shuffle();
  createBoard();
}
