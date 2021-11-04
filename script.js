const btn = document.querySelector("button");
const table = document.querySelector('.table');
let player1 = '';
let player2 = '';
let score1 = '';
let score2 = '';

btn.addEventListener('click',() => {
     player1 = document.querySelector('#player1').value;
     player2 = document.querySelector('#player2').value;
     score1 = document.querySelector('#score1').value;
     score2 = document.querySelector('#score2').value;

     console.log(player1);
     console.log(player2);
     console.log(score1);
     console.log(score2);
     if(score1 >= 11 || score2 >= 11){
          table.innerHTML += `
          <div class="row">
               <span class="name1">${player1}</span>
               <span class="score1">${score1}</span>
               <span class="dash">-</span>
               <span class="score2">${score2}</span>
               <span class="name2">${player2}</span>
          </div>`
          score1 = document.querySelector('#score1').value ='0';
          score2 = document.querySelector('#score2').value ='0';
     }
     
})