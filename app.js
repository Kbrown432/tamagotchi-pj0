// create variables for my button elements
// const king = document.getElementsByClassName('.king');
// const food = document.getElementsByClassName('.action');
// const play = document.getElementsByClassName('.fun');
// const rest = document.getElementsByClassName('.sleep');

// console.log(rest);
// create EventListeners for king, food, play & rest buttons

// function primePlay() {
//     // king.addEventListener("click");
//     console.log("button works")
// }


// function nowWorking(){
//     king.addEventListener("click", primePlay());
// }


//create setTimeIntervals for stats

// let num = null;


const king = document.getElementsByClassName('.king');
const food = document.getElementsByClassName('.action');
const play = document.getElementsByClassName('.fun');
const rest = document.getElementsByClassName('.sleep');
// console.log(rest);

// create EventListeners for king, food, play & rest buttons
let num = 0;
function primeSecond() {
  food.getElementById('second').innerHTML = num;
}
function primeThird() {
  document.getElementById('third').innerHTML = num;
}
function primeFourth() {
  document.getElementById('fourth').innerHTML = num;
}

// Create a setInterval function to allow the value in hunger, sleepiness & boredom to count up to 10
const lifeVal = () => {
  // document.getElementById('second').innerHTML = num;
  if (num <= 10) {
    document.getElementById('second').innerHTML = num;
    num++;
  } else {
    console.log("function not working");
  }
 }
const increase = setInterval(lifeVal(), 10000);

// function nowWorking(){
//     king.addEventListener("click", primePlay());
// }

//create setTimeIntervals for stats
// create a click operator for king, food, play & rest buttons















