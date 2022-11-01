function getComputerChoice() {
    let compChoice = ["ROCK", "PAPER", "SCISSORS"]
    return compChoice[Math.floor((Math.random()*compChoice.length))];
}

function playRound(playerSelection, computerSelection) {
    let result;
    switch (computerSelection) {
        case "ROCK":
            if (playerSelection === null) {
                return result = "Play again next time!";
            } else if (playerSelection.toUpperCase() === "PAPER") {
                return result = "You Win! Paper beats Rock"; 
            } else if (playerSelection.toUpperCase() === "SCISSORS") {
                return result = "You Lose! Rock beats Scissors";
            }  else if (playerSelection.toUpperCase() === "ROCK") {
                return result = "It's a Tie!";
            } else {
                return result = "Not one of the choices. Please try again."; 
            }
            break;
        
        case "PAPER":
            if (playerSelection === null) {
                return result = "Play again next time!";
            } else if (playerSelection.toUpperCase() === "SCISSORS") {
                return result = "You Win! Scissors beat Paper"; 
            } else if (playerSelection.toUpperCase() === "ROCK") {
                return result = "You Lose! Paper beats Rock";
            }  else if (playerSelection.toUpperCase() === "PAPER") {
                return result = "It's a Tie!";    
            } else {
                return result = "Not one of the choices. Please try again."; 
            }
            break;

        case "SCISSORS":
            if (playerSelection === null) {
                return result = "Play again next time!";
            } else if (playerSelection.toUpperCase() === "ROCK") {
                return result = "You Win! Rock beats Scissors"; 
            } else if (playerSelection.toUpperCase() === "PAPER") {
                return result = "You Lose! Scissors beat Paper";
            }  else if (playerSelection.toUpperCase() === "SCISSORS") {
                return result = "It's a Tie!";
            } else {
                return result = "Not one of the choices. Please try again."; 
                }
            break;

            default:
                return result ="";
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 6; i++) {
        if (i===5) {
            if (playerScore > compScore) {
                alert("CONGRATULATIONS! You won the game");
                console.log("CONGRATULATIONS! You won the game");
            } else if (playerScore < compScore) {
                alert("You lost. Try your luck next time");
                console.log("You lost. Try your luck next time");
            } else {
                alert("It's a tie");
                console.log("It's a tie");
            };
        } else {
            console.log("Round "+ parseInt(i+1));
            let playerSelection = prompt(`ROUND ${parseInt(i+1)}` + '\n' + "Rock, Paper, or Scissors?", "");
            let computerSelection = getComputerChoice();
            if (playRound(playerSelection, computerSelection) === "Play again next time!") {
                alert("Play again next time!");
                console.log("Play again next time!");
                return;
            } else if (playRound(playerSelection, computerSelection).slice(4,5) ==="W") {
                playerScore += 1;
            } else if (playRound(playerSelection, computerSelection).slice(4,5) ==="L") {
                compScore += 1;
            } else {playerScore +=0}
            console.log(playRound(playerSelection, computerSelection) + ` You picked ${playerSelection.toUpperCase()}. ` + `The Computer picked ${computerSelection}. `);
            alert(`You picked ${playerSelection.toUpperCase()}.` + '\n' + `The Computer picked ${computerSelection}.` + '\n' + '\n' + 
            playRound(playerSelection, computerSelection) + '\n' + '\n' + `Player - ${playerScore}  ||  Computer - ${compScore}`);
            console.log(`Player - ${playerScore}, Computer - ${compScore}`);
         }
    }
}

game();