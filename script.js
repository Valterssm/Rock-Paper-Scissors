function randomNum(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min);
}

function getComputerChoice() {
    let n = randomNum(1, 3);

    if (n == 1) {
        return 'rock';
    }
    else if (n == 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playerPlay() {
    p = prompt("rock, paper, or scissors?").toLowerCase();
}

function getHumanChoice() {
    if (playerPlay == "rock") {
        return 'rock';
    }
    else if (playerPlay == "paper") {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    playerPlay();
    win = `You win! ${humanChoice} beats ${computerChoice}!`;
    lose = `You lose... ${computerChoice} beats ${humanChoice}`;
    draw  = 'tie!';

    if ( humanSelection == 'rock' && computerSelection == 'scissors') { 
        result = win; 
        playerScore++;
        console.log(win);
    }
    else if ( humanSelection == 'rock' && computerSelection == 'paper') {
        result = lose;
        computerScore++;
        console.log(lose);
    }
    else if ( humanSelection == 'paper' && computerSelection == 'rock') {
        result = win;
        playerScore++;
        console.log(win);
    }
    else if (humanSelection == 'paper' && computerSelection == 'scissors') {
        result = lose;
        computerScore++;
        console.log(lose);
    }
    else if (humanSelection == 'scissors' && computerSelection == 'paper') {
        result = win;
        playerScore++;
        console.log(win);

    }
    else if (humanSelection == 'scissors' && computerSelection == 'rock') {
        result = lose;
        computerScore++;
        console.log(lose);
    }
    else if (humanSelection == computerSelection) {
        result = draw;
        console.log(draw);
    }
    else {
        alert(`Oops! ${humanSelection} is not an option`);
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function game() {

    for (i = 1; i <= 5; i++) {
        getComputerChoice();
        playRound();
        console.log(`Round # ${i}`);
        console.log(result);
        if (i == 5) {
    if (playerScore > computerScore) {
        console.log(`You beat the computer ${playerScore} to ${computerScore}!`);
    }
    else if (playerScore < computerScore) {
        console.log(`The computer beat you ${computerScore} to ${playerScore}`);
    }  
    else if (playerScore == computerScore) {
        console.log(`It's a tie! ${playerScore} to ${computerScore}`)
    } 
    }} }
game()