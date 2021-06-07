const btn = document.querySelector('button')
const tabela = document.querySelector('.tabela')
const squareTemp = document.querySelector('.square-temp')

let name1 = 'Michal'
let name2 = 'Grzesiu'
let score1 = 11
let score2 = 11
function saveName(){

     name1 = document.getElementById("name1").value
     name2 = document.getElementById("name2").value
     score1 = document.getElementById("score1").value
     score2 = document.getElementById("score2").value
}

const addMoreSquares = () => {
	const square = document.createElement('div')
	square.classList.add('square')
    score1 = document.getElementById("score1").value
    score2 = document.getElementById("score2").value
    if(score1 > score2){
        square.innerHTML = `
        <div class="square">
            <span class="name1">${name1}</span>
            <span class="score1 green">${score1}</span>
            <span class="myslnik">-</span>
            <span class="score2 red">${score2}</span>
            <span class="name2">${name2}</span>
        </div>`
    }
	if(score2 > score1)
    {
        square.innerHTML = `
    <div class="square">
        <span class="name1">${name1}</span>
        <span class="score1 red">${score1}</span>
        <span class="myslnik">-</span>
        <span class="score2 green">${score2}</span>
        <span class="name2">${name2}</span>
    </div>`
    }
    if(score1 == score2)
    {}

	tabela.appendChild(square)
}

btn.addEventListener('click', addMoreSquares)
