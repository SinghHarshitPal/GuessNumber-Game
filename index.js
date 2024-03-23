
"use strict";
let highScore = 0;
let score = 20;
let num = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent =
      "Enter A valid Number between 1 to 20";
  } else if (guess === num) {
    document.querySelector(".message").textContent = "Correct Number!!";
    if(score > highScore){
    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
   }
    document.querySelector(".number").textContent = num;
    //also here the Player wins so need to change the CSS
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > num && score != 0) {
    document.querySelector(".message").textContent = "Number is too High!!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < num && score != 0) {
    document.querySelector(".message").textContent = "Number is too Low!!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (score === 0) {
    document.querySelector(".message").textContent =
      "You Lose The Game Try Again !!";
  }
});
console.log(document.querySelector(".number").textContent);
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing....";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
});
