
function computerPlay () {
    const play = (Math.floor(Math.random()*3+1));
    if (play === 3) {
        return ('Rock');
    }
    else if (play === 2) {
        return ('Paper');
    }
    else if (play === 1) {
        return ('Scissors');
    }
    else return ('An error has occured, number outside of 1-3');
    };
//console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    pS = playerSelection.toLowerCase();
    cS = computerSelection.toLowerCase();
    //console.log(pS);
    //console.log(cS);
    if (pS === cS) {
        return ("It's a tie!");
        
    }
    else if (pS === 'rock' & cS === 'scissors') {
        return ('You Win! Rock beats Scissors');
    }
    else if (pS === 'rock' & cS === 'paper') {
        return ('You Lose! Paper beats Rock');
    }
    else if (pS === 'paper' & cS === 'rock') {
        return ('You Win! Paper beats Rock');
    }
    else if (pS === 'paper' & cS === 'scissors') {
        return ('You Lose! Scissors beats Paper');
    }
    else if (pS === 'scissors' & cS === 'paper') {
        return ('You Win! Scissors beats Paper');
    }
    else if (pS === 'scissors' & cS === 'rock') {
        return ('You Lose! Rock beats Scissors');
    }
    else return ('Please choose Rock, Paper, or Scissors')
}

function game() {
    for (let i=0; i < 5; i++) {
       if (i < 5) {
        let playerSelection = prompt('Choose your RPS');
        result = playRound(playerSelection, computerPlay())
        }
       if (result.includes('Win')) {
            playerScore = playerScore + 1;
        } else if (result.includes('Lose')) {
            computerScore = computerScore + 1
        }
        console.log(result);
        console.log(playerScore);
        console.log(computerScore);
        
       
    }
    if (playerScore > computerScore) {
        return ('You Win best of 5');
    } else if (playerScore < computerScore) {
        return ('You Lose best of 5');
    } else return ('Best of 5 tie!');
    
}

let playerScore = 0;
let computerScore = 0;

//const playerSelection = 'rock';
let computerSelection = computerPlay();
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
//console.log(game());
