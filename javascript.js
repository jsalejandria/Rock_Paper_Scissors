let playerScore = 0;
let compScore = 0;

const board = document.querySelector("#board");
const cont = document.querySelector("#cont");
const outcome = document.querySelector("#outcome");
const scoreboard = document.querySelector("#scoreboard");

const contBox = document.createElement('div');
contBox.classList.add('contBox');

const conclusion = document.createElement('div');
conclusion.classList.add('conclusion');

const result = document.createElement('div');
result.classList.add('result');

const pScore = document.createElement('div');
pScore.classList.add('pScore');
pScore.textContent = `PLAYER - ${playerScore}`;
scoreboard.appendChild(pScore);

const cScore = document.createElement('div');
cScore.classList.add('cScore');
cScore.textContent = `COMPUTER - ${compScore}`;
scoreboard.appendChild(cScore);

const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{button.addEventListener('click',()=>{
    playerSelection = button.id.toUpperCase();
    computerSelection = getComputerChoice();
    game(playerSelection, computerSelection);
    })
});

function getComputerChoice() {
    let compChoice = ["ROCK", "PAPER", "SCISSORS"]
    return compChoice[Math.floor((Math.random()*compChoice.length))];
}

function playRound(playerSelection, computerSelection) {
    switch (computerSelection) {
        case "ROCK":
            if (playerSelection === "PAPER") {
                result.textContent = "You Win! Paper beats Rock"; 
            } else if (playerSelection === "SCISSORS") {
                result.textContent = "You Lose! Rock beats Scissors";
            }  else if (playerSelection === "ROCK") {
                result.textContent = "It's a Tie!";
            } else {
                result.textContent = "Not one of the choices. Please try again."; 
            }
            break;
        
        case "PAPER":
            if (playerSelection === "SCISSORS") {
                result.textContent = "You Win! Scissors beat Paper"; 
            } else if (playerSelection === "ROCK") {
                result.textContent = "You Lose! Paper beats Rock";
            }  else if (playerSelection === "PAPER") {
                result.textContent = "It's a Tie!";    
            } else {
                result.textContent = "Not one of the choices. Please try again."; 
            }
            break;

        case "SCISSORS":
            if (playerSelection === "ROCK") {
                result.textContent = "You Win! Rock beats Scissors"; 
            } else if (playerSelection === "PAPER") {
                result.textContent = "You Lose! Scissors beat Paper";
            }  else if (playerSelection === "SCISSORS") {
                result.textContent = "It's a Tie!";
            } else {
                result.textContent = "Not one of the choices. Please try again."; 
                }
            break;

            default:
                result.textContent = "";
    }
    const compROCK = document.querySelector('#compROCK')
    compROCK.style.backgroundColor = 'white';
    const compPAPER = document.querySelector('#compPAPER')
    compPAPER.style.backgroundColor = 'white';
    const compSCISSORS = document.querySelector('#compSCISSORS')
    compSCISSORS.style.backgroundColor = 'white';
    outcome.appendChild(result);
    roundResult();
    const compChose = document.querySelector(`#comp${computerSelection}`);
    compChose.style.backgroundColor = 'red';
}

function game(playerSelection, computerSelection) {
    playRound(playerSelection, computerSelection);    
    if (playerScore === 5 || compScore === 5) {
        if (playerScore === 5) {
            conclusion.textContent = "CONGRATULATIONS! You won the game";
        } else if (compScore === 5) {
            conclusion.textContent = "You lost. Try your luck next time"; 
        };
        while (board.firstChild) {
            board.removeChild(board.lastChild);
        };
        cont.appendChild(contBox);
        contBox.appendChild(conclusion);
        const again = document.createElement('button');
        again.classList.add('again');
        again.textContent = "Play Again";
        contBox.appendChild(again);
        again.addEventListener('click', () => {
            newGame();
          });
    } else {
        return;
    }
};

function roundResult() {
    if (result.textContent === "It's a Tie!") {
        compScore += 0;
    } else if (result.textContent.slice(4,5) === "W") {
        playerScore += 1;
    } else if (result.textContent.slice(4,5) ==="L") {
        compScore += 1;
    } else {
        playerScore +=0;
    };
    pScore.textContent = `PLAYER - ${playerScore}`;
    cScore.textContent = `COMPUTER - ${compScore}`;
};

function newGame() {
    location.reload();
};
