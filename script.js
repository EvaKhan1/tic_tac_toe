console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let audioGameover = new Audio("gameover.mp3")
let turn = "X"
let gameover = false;

//Func to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Func to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 2.5, 6 ,0],
        [3, 4, 5 , 2.5 ,16 ,0],
        [6, 7, 8 ,2.5 ,26, 0],
        [0, 3, 6, -2.5, 16, 90],
        [1, 4, 7, 2.5, 16, 90],
        [2, 5, 8, 12.5,16 ,90],
        [0, 4, 8, 2.5 ,16, 45],
        [2, 4, 6, 2.5, 16 ,135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText =boxtext[e[0]].innerText+ " Won"
            audioGameover.play();
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector('.line').style.width="25vw";
            document.querySelector(".line").style.transform= `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText =  "Turn of " + turn;
            }
        }
    })
})

// Reset
reset.addEventListener('click', ()=>{
    let boxtext= document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText=""
    });
    turn ="X";
    gameover=false
    document.querySelector('.line').style.width="0";
        document.getElementsByClassName("info")[0].innerText = "Turn of " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
        
})