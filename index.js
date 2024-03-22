'use strict';   

let score = 20;
const num = Math.trunc(Math.random() * 20 )  +  1  ;
document.querySelector('.check').addEventListener('click',function() {
   const guess =  Number(document.querySelector('.guess').value)
   if(!guess){
    document.querySelector('.message').textContent = 'Enter A valid Number between 1 to 20';
   }else if( guess === num ){
      document.querySelector('.message').textContent = 'Correct Number!!';
      document.querySelector('.highscore').textContent = score
      //also here the Player wins so need to change the CSS

   }else if (guess > num && score !=0 ){
      document.querySelector('.message').textContent = 'Number is too High!!';
      document.querySelector('.score').textContent = score--;
      score--;
   }else if (guess < num && score != 0 ){
      document.querySelector('.message').textContent = 'Number is too Low!!';
      document.querySelector('.score').textContent = score--;
   }
   else if( score === 0 ){
      document.querySelector('.message').textContent = 'You Lose The Game Try Again !!';
   }
})
document.querySelector('.number').textContent = num