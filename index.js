'use strict';   

document.querySelector('.check').addEventListener('click',function() {
   const guess =  Number(document.querySelector('.guess').value)
   console.log(typeof(guess))

   if(!guess){
    document.querySelector('.message').textContent = 'Enter A valid Number between 1 to 20'
   }
})