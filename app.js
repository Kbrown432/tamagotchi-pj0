// create variables for my button elements
// const king = document.getElementsByClassName('.king');
// const food = document.getElementsByClassName('.action');
// const play = document.getElementsByClassName('.fun');
// const rest = document.getElementsByClassName('.sleep');




// create EventListeners for king, food, play & rest buttons

// function primePlay() {
//     // king.addEventListener("click");
//     console.log("button works")
// }


// function nowWorking(){
//     king.addEventListener("click", primePlay());
// }



// let num = null;



// console.log(rest);


// let num = 0;
// // function primeSecond() {
// //   food.getElementById('second').innerHTML = num;
// // }
// // function primeThird() {
// //   document.getElementById('third').innerHTML = num;
// // }
// // function primeFourth() {
// //   document.getElementById('fourth').innerHTML = num;
// // }

// // Create a setInterval function to allow the value in hunger, sleepiness & boredom to count up to 10
//  // document.getElementById('second').innerHTML = num;
// //   if (num <= 10) {
//   //   } else {
//   setInterval(function() {
 
//      num++;

//      console.log(num);
//    }, 1000);

// let intervalFunc = setInterval(function() {
//   num++;
//   console.log(num);
// }, 1000);  

// clearInterval(intervalFunc);
//  }
//  lifeVal();

 // const increase = setInterval(lifeVal(), 10000);

// function nowWorking(){
//     king.addEventListener("click", primePlay());
// }

// below this comment is new code for my button functioning

const startGame = document.querySelector(".king");
const feedPet = document.querySelector(".eat");
const playPet = document.querySelector(".fun");
const restPet = document.querySelector(".sleep");
// console.log(rest);
let num = 0;
let numCount = null;
function primeFirst() {
  console.log("start button clicked");
  num++;
}
function primeSecond() {
  console.log("feed button clicked");
}
function primeThird() {
  console.log("play button clicked");
}
function primeFourth() {
  console.log("rest button clicked");
}
// Create a setInterval function that counts up to 10
numCount = setInterval(function() {
})
// function nowWorking(){
//     king.addEventListener("click", primePlay());
// }
//create setTimeIntervals for stats
// create EventListeners for king, food, play & rest buttons
startGame.addEventListener("click", primeFirst);
feedPet.addEventListener("click", primeSecond);
playPet.addEventListener("click", primeThird);
restPet.addEventListener("click", primeFourth);
































