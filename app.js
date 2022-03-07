// create variables for my button elements
const king = document.getElementsByClassName('.king');
const food = document.getElementsByClassName('.action');
const play = document.getElementsByClassName('.fun');
const rest = document.getElementsByClassName('.sleep');

// console.log(rest);
// create EventListeners for king, food, play & rest buttons

function primePlay() {
    king.addEventListener("click");
    console.log("button works")
}

function nowWorking(){
    king.addEventListener("click", primePlay());
}


//create setTimeIntervals for stats


