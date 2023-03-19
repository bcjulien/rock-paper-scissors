const CHOICES = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)].toUpperCase();
}
// console.log(getComputerChoice());

function getPlayerChoice() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors:");
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}
// console.log(getPlayerChoice());

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'ROCK':
            if (computerSelection === 'ROCK') {
                return("Tie!");
            } else if (computerSelection === 'PAPER') {
                return("You lose! Paper beats Rock.");
            } else {
                return("You win! Rock beats Scissors.");
            }
        case 'PAPER':
            if (computerSelection === 'PAPER') {
                return("Tie!");
            } else if (computerSelection === 'SCISSORS') {
                return("You lose! Scissors beats Paper.");
            } else {
                return("You win! Paper beats Rock.");
            }
        case 'SCISSORS':
            if (computerSelection === 'SCISSORS') {
                return("Tie!");
            } else if (computerSelection === 'ROCK') {
                return("You lose! Rock beats Scissors.");
            } else {
                return("You win! Scissors beats Paper.");
            }
        default:
            console.log("HELP");
            break;
    }
}
// console.log(playRound(getPlayerChoice(), getComputerChoice()));

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}
game();