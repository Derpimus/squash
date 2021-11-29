const btn = document.querySelector(".swap");
const btnSave = document.querySelector(".save");
const btnDelete = document.querySelector(".delete");
const matchHistory = document.querySelector('#match-history');
const scoreboard = document.querySelector('#scoreboard');
let names = ['', ''];
let scores = [0, 0];
let wins = [0, 0];
let loses = [0, 0];
let history = [];

const drawWinLose = () => {
     scoreboard.innerHTML = `
     <div class="scoreboard-row">
     <span class="title">Name</span>
     <span class="title winLose">win - lose</span>
     <span class="title">+/-</span>
     </div>`;
for (let i = 0; i < names.length; i++) {
     scoreboard.innerHTML += `
     <div class="scoreboard-row">
      <span class="name">${names[i]}</span>
      <span class="score1">${wins[i]}</span>
      <span class="record">-</span>
      <span class="score2">${loses[i]}</span>
      <span class="plus-minus">${scores[i]}</span>
  </div>`
}}
const resetPanel = () => {
     document.querySelector('#score1').value = 0;
     document.querySelector('#score2').value = 0;
     document.querySelector('#player1').value = 'Player1';
     document.querySelector('#player2').value = 'Player2';
}
const drawMatchHistory = () =>{
     matchHistory.innerHTML = ``;
     for (let i = 0 ; i < history.length ; i++){

          matchHistory.innerHTML += `
          <div class="row">
               <span class="name1">${history[i][0]}</span>
               <span class="score1">${history[i][2]}</span>
               <span class="dash">-</span>
               <span class="score2">${history[i][3]}</span>
               <span class="name2">${history[i][1]}</span>
          </div>`

     }
     
}

btn.addEventListener('click', () => {
     const player1 = document.querySelector('#player1').value;
     const player2 = document.querySelector('#player2').value;
     const score1 = document.querySelector('#score1').value;
     const score2 = document.querySelector('#score2').value;
     
     if ((score1 || score2) > 10) {
          history.push([player1, player2, score1, score2]);

          drawMatchHistory();


          if (names[0] == '' && names[1] == '') {
               names[0] = player1;
               names[1] = player2;
          }
          //checking if there is name in Names
          let variable1 = 0;
          let variable2 = 0; //adding variable to save if there are names already in the array

          for (let i = 0; i < names.length; i++) {
               //if there are names in array variable is equal to 1
               if (names[i] == player1) {
                    variable1 = 1;
               }
               if (names[i] == player2) {
                    variable2 = 1;
               }
          }
          //adding new names to array if needed
          if (variable1 == 0) {
               names.push(player1); //add player1 to end of names array
               scores.push(0);
               wins.push(0);
               loses.push(0);
          }
          if (variable2 == 0) {
               names.push(player2); //add player2 to end of names array
               scores.push(0);
               wins.push(0);
               loses.push(0);
          }
          for (let i = 0; i < names.length; i++) {
               if (names[i] == player1) {
                    scores[i] += parseInt(score1);
                    scores[i] -= parseInt(score2);
                    if (parseInt(score1) > parseInt(score2)) {
                         wins[i]++;
                    } else {
                         loses[i]++;
                    }
               }
               if (names[i] == player2) {
                    scores[i] += parseInt(score2);
                    scores[i] -= parseInt(score1);
                    if (parseInt(score2) > parseInt(score1)) {
                         wins[i]++;
                    } else {
                         loses[i]++;
                    }
               }
          }
          drawWinLose();
          resetPanel();
     }

});

btnSave.addEventListener('click', () => {
     
})
