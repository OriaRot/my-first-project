let cards =['A','B','C','D','E','F','G','H','I','J',
'K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lastCards = [];
let newCards = [];
function double_cards(){

    for(i in cards){
        newCards.push(cards[i])
        newCards.push(cards[i].toLowerCase())
    }
    return newCards;
}
newCards = double_cards()
function getRandom(){
    let randomNumber = Math.round(Math.random() * (newCards.length-1))
        return randomNumber;
}
function random_cards(){
for(let i=0;i<100;i++){
    let place1=getRandom();
    let place2=getRandom();

    let temp=newCards[place1];
    newCards[place1]=newCards[place2];
    newCards[place2]=temp;
}
return newCards;
    }

cards = random_cards()

let board = document.getElementById("game-table");
let elem;
for (i in cards){
    elem = document.createElement("div");
    elem.innerHTML = cards[i]
    board.appendChild(elem);
    elem.className = "card";
}
