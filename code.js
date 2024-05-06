
//after all content loads then run the code
document.addEventListener('DOMContentLoaded', ()=> {

const enemyImage = document.querySelector('.enemyScreen .screen img');
const playerScore = document.querySelector('.playerScore');
const enemyScore = document.querySelector('.enemyScore');
const playerImage = document.querySelector('.playerScreen .screen img');
const logs = document.querySelector('.logs');
const playBtns = document.querySelector('.playBtns');
const playAgain = document.querySelector('.playAgain');

//global array with values
let choice = ["paper", "rock", "scissors"];

//computer choice
function getComputerChoice() {
    let computerChoice = choice[Math.floor((Math.random() * choice.length))];
    return computerChoice;
}


function showAlert(text) {
    alert(text);
}

//play a round
function playRound(playerSelection, computerSelection) {
    if
    (playerSelection == "paper" && computerSelection == "rock" ||
     playerSelection =="rock" && computerSelection == "scissors" ||
     playerSelection == "scissors" && computerSelection == "paper") {
        return "player"
     }
     else
        return "computer"
}

//clear document
function clear() {
    logs.textContent = "";
    computer = 0;
    player = 0;
}

let player = 0;
let computer = 0;

let alertP = false;
let alertC = false;

playAgain.addEventListener('click', () => {
    playAgain.style.display = 'none';
    playBtns.style.display = 'block';
    enemyImage.src = '';
    playerImage.src = '';
    playerScore.textContent = 0;
    enemyScore.textContent = 0;
    logs.textContent = '';
} )

document.querySelectorAll('.btns').forEach(button => {
    button.onclick = () => {
        let playerChoice = button.dataset.attr;
        let computerChoice = getComputerChoice();
        let header = document.createElement('h2');

        if (playerChoice === 'paper') {
            playerImage.src = 'images/paperPlayer.jpg';
        }
        else if(playerChoice === 'rock') {
            playerImage.src = 'images/rockPlayer.jpg';
        }
        else if (playerChoice === 'scissors') {
            playerImage.src = 'images/scissorsPlayer.jpg'
        }

        if (computerChoice === 'paper') {
            enemyImage.src = 'images/paperEnemy.jpg';
        }
        else if (computerChoice === 'rock') {
            enemyImage.src = 'images/rockEnemy.jpg';
        }
        else if (computerChoice === 'scissors') {
            enemyImage.src = 'images/scissorsEnemy.jpg'
        }
        console.log(computerChoice);
        console.log(playerChoice);

        if(computer >= 5 || player >= 5) 
            clear();

        if (playerChoice == computerChoice) {
            logs.innerHTML += 'Repeat round! <br>'
            return
        }
        
        let result = playRound(playerChoice, computerChoice);

        if (result == 'player') {
            player++;
            playerScore.textContent = player;
            // logs.innerHTML += `Player wins! ${playerChoice} beats ${computerChoice} <br>`;
            // logs.innerHTML += `player : ${player} computer : ${computer} <br>`;
            console.log(`player : ${player} computer : ${computer}`)
            
        }
        else {
            computer++;
            enemyScore.textContent = computer;
            // logs.innerHTML += `You Lose! ${computerChoice} beats ${playerChoice} <br>`;
            // logs.innerHTML += `player : ${player} computer : ${computer} <br>`;
            console.log(`player : ${player} computer : ${computer}`)
            
        }

        if (player == 5  ) {
            // logs.innerHTML += `You win with score: ${player} : ${computer} <br>`;
            // logs.innerHTML += 'Game Over';

            header.textContent = `You win with score: ${player} : ${computer}`
            logs.append(header);
            
            console.log(`You win with score: ${player} : ${computer}`);
            playBtns.style.display = 'none';
            player = 0;
            computer = 0;
            playAgain.style.display = 'block';
            
        }

        else if (computer == 5 ) {
            // logs.innerHTML += `You lose with score: ${player} : ${computer} <br>`;
            // logs.innerHTML += "Game over!!!!";
            
            header.innerHTML = `You lose with score: ${player} : ${computer}`
            logs.append(header);
            playBtns.style.display = 'none';
            player = 0;
            computer = 0;
            playAgain.style.display = 'block';
        }

    }
})
});
