const board = document.getElementById('board')
const player = document.getElementById('ipt')
const player1 = document.getElementById('ipt2')
const start = document.getElementById('btn')
const names = document.getElementById('names')
const disapear = document.getElementById('before')
let cnt = 0;
let cnt2 = 0;
let temp = [];
let elem;
let elem1;
let firstOrSecond = 'f'
function createCards(card,id){
return {
    card,
    id,
}
};
let cards = [
    createCards('a',1),
    createCards('A',1),
    createCards('b',2),
    createCards('B',2),
    createCards('c',3),
    createCards('C',3),
    createCards('d',4),
    createCards('D',4),
    createCards('e',5),
    createCards('E',5),
    createCards('f',6),
    createCards('F',6),
    createCards('g',7),
    createCards('G',7),
    createCards('h',8),
    createCards('H',8),
    createCards('i',9),
    createCards('I',9),
    createCards('j',10),
    createCards('J',10),
    createCards('k',11),
    createCards('K',11),
    createCards('l',12),
    createCards('L',12),
    createCards('m',13),
    createCards('M',13),
    createCards('n',14),
    createCards('N',14),
    createCards('o',15),
    createCards('O',15),
    createCards('p',16),
    createCards('P',16),
    createCards('q',17),
    createCards('Q',17),
    createCards('r',18),
    createCards('R',18),
    createCards('s',19),
    createCards('S',19),
    createCards('t',20),
    createCards('T',20),
    createCards('u',21),
    createCards('U',21),
    createCards('v',22),
    createCards('V',22),
    createCards('w',23),
    createCards('W',23),
    createCards('x',24),
    createCards('X',24),
    createCards('y',25),
    createCards('Y',25),
    createCards('z',26),
    createCards('Z',26),
];

function createRandomNumber() {
    let randomNumber = Math.round(Math.random() * (cards.length - 1));
    return randomNumber;
  }
function shuffle(){
    for (let i = 0; i < 100; i++) {
        let place1 = createRandomNumber();
        let place2 = createRandomNumber();
    
        let temp = cards[place1];
        cards[place1] = cards[place2];
        cards[place2] = temp;
      }
      return cards;
}
function createBoard (){
    cards.forEach(item =>{
        let elem = document.createElement('div')
        elem.innerText = item.card
        board.appendChild(elem)
        elem.className = `card ${item.id} hidden`
        elem.id = item.id
        elem.onclick =  click
       
    })}


function click(e){
    e.target.classList.remove("hidden");
    e.target.onclick = noClick
    temp.push(e.target.id)
    let firstCard = document.getElementsByClassName(temp[0])
    if(temp.length>1){
        // for (i = 0; i<cards.length;i+=2){
    if(temp[0]==temp[1]){
        if(firstOrSecond == 'f'){
            cnt+=10
            elem.innerText = `${player.value}:${cnt}`
        }
        else{
            cnt2+=10
            elem1.innerText = `${player1.value}:${cnt2}`
        }
      setTimeout(()=>{  e.target.classList.remove('card')
        e.target.classList.add("hidden")
        for (i of firstCard){
            i.classList.remove('card')
            i.classList.add("hidden")
        }},1000)

        temp = []
        
    }
    else{
        if(firstOrSecond == 'f'){
            firstOrSecond = 's'
            elem.classList.replace('active','not-active')
            elem1.classList.replace('not-active','active')
        }
        else{
            firstOrSecond = 'f'
            elem.classList.replace('not-active','active')
            elem1.classList.replace('active','not-active')
        }
        setTimeout(()=>{
            e.target.onclick = click
            e.target.classList.add("hidden")
            for (i of firstCard){
                i.onclick = click
                i.classList.add("hidden")
                temp = []
            }
        },1000)
        
    //}
}
}
}
function noClick(){}
start.onclick = function(){
        elem = document.createElement('h4')
        elem1 = document.createElement('h4')
        elem.className = 'player-name active'
        elem1.className = 'player-name not-active'
        elem.innerText = `${player.value}:${cnt}`
        elem1.innerText = `${player1.value}:${cnt2}`
        names.appendChild(elem)
        names.appendChild(elem1)
        disapear.className = 'go-away'
        shuffle()
        createBoard()
}

