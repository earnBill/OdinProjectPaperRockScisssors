//after all content loads then run the code
document.addEventListener('DOMContentLoaded', ()=> {

//global array with values
let choice = ["paper", "rock", "scissors"];

//computer choice
function getComputerChoice() {
    let computerChoice = choice[Math.floor((Math.random() * choice.length))];
    return computerChoice;
}

//playround
function playRound(playerSelection, computerSelection) {
    if
    (playerSelection == "paper" && computerSelection == "rock" ||
     playerSelection =="rock" && computerSelection == "scissors" ||
     playerSelection == "scissord" && computerSelection == "paper") {
        return "player"
     }
     else
        return "computer"
}

//clear document
function clear() {
    container.innerHTML = "";
    computer = 0;
    player = 0;
}

let player = 0;
let computer = 0;

let alertP = false;
let alertC = false;

let container = document.querySelector('.container');

document.querySelectorAll('button').forEach(button => {
    button.onclick = () => {
        let playerChoice = button.dataset.attr;
        let computerChoice = getComputerChoice();
        let header = document.createElement('h2');

        console.log(computerChoice);
        console.log(playerChoice);

        if(computer >= 5 || player >= 5) 
            clear();

        if (playerChoice == computerChoice) {
            container.innerHTML += 'Repeat round! <br>'
            return
        }
        
        let result = playRound(playerChoice, computerChoice);

        if (result == 'player') {
            player++;
            container.innerHTML += `Player wins! ${playerChoice} beats ${computerChoice} <br>`;
            container.innerHTML += `player : ${player} computer : ${computer} <br>`;
            console.log(`player : ${player} computer : ${computer}`)
            
        }
        else {
            computer++;
            container.innerHTML += `You Lose! ${computerChoice} beats ${playerChoice} <br>`;
            container.innerHTML += `player : ${player} computer : ${computer} <br>`;
            console.log(`player : ${player} computer : ${computer}`)
            
        }

        if (player == 5  ) {
            container.innerHTML += `You win with score: ${player} : ${computer} <br>`;
            container.innerHTML += 'Game Over';

            header.innerHTML = `You lose with score: ${player} : ${computer}`
            container.append(header);
            
            console.log(`You win with score: ${player} : ${computer}`);
            
        }

        else if (computer == 5 ) {
            container.innerHTML += `You lose with score: ${player} : ${computer} <br>`;
            container.innerHTML += "Game over!!!!";
            
            header.innerHTML = `You lose with score: ${player} : ${computer}`
            container.append(header);
            
        }

    }
})
});
