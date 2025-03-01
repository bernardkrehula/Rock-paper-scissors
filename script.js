let startNewGame = document.querySelector('.start-overlay button');
let gameBtns = document.querySelectorAll('.playing-hands button');
let main = document.querySelector('.main');
let playerResult = document.querySelector('.player-result h2');
let computerResult = document.querySelector('.computer-result h2');
let overlay = document.querySelector('.start-overlay');
let gameContent = document.querySelector('.game-content');
let weapon = document.querySelector('.weapon');
let outcome = document.querySelector('.outcome');

let playerChoice; 
let computerChoice;
let playerScore = 0;
let computerScore = 0;

function makeGameRules(){
    const computerChoices = ['rock', 'paper', 'scissors'];
    computerChoice = computerChoices;
    const defineGameRules = () => {
        getRandomComputerChoice();
        if(playerChoice == computerChoice){
            weapon.innerHTML = `It's a tie !`;
            outcome.innerHTML = `${playerChoice} ties with ${computerChoice}`;
        }
        else {
            switch(playerChoice) {
                case 'rock':
                    if(computerChoice == 'scissors'){
                        addPointToPlayer()
                        weapon.innerHTML = 'Player won!';
                        outcome.innerHTML = `Rock beats ${computerChoice}`;
                    }
                    else {
                        addPointToComputer();
                        weapon.innerHTML = 'Computor won!';
                        outcome.innerHTML = `${computerChoice} beats Rock`;
                    }  
                    break;
                case 'paper':
                    if(computerChoice == 'rock'){
                        addPointToPlayer()
                        weapon.innerHTML = 'Player won!';
                        outcome.innerHTML = `Paper beats ${computerChoice}`;
                    }
                    else {
                        addPointToComputer();
                        weapon.innerHTML = 'Computor won!';
                        outcome.innerHTML = `${computerChoice} beats Paper`;
                    } 
                    break;
                case 'scissors':
                    if(computerChoice == 'paper'){
                        addPointToPlayer()
                        weapon.innerHTML = 'Player won!';
                        outcome.innerHTML = `Sissors beats ${computerChoice}`;
                    }
                    else {
                        addPointToComputer();
                        weapon.innerHTML = 'Computor won!';
                        outcome.innerHTML = `${computerChoice} beats Sissors`;
                    } 
                    break;
                }
        }
    }
    const addPointToPlayer = () => {
        playerScore++;
    }
    const addPointToComputer = () => {
        computerScore++;
    }
    const getRandomComputerChoice = () => {
        computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        return computerChoice;
    }
    return { defineGameRules, getRandomComputerChoice, addPointToPlayer, addPointToComputer }
}
const game = makeGameRules();

refreshResultsOnStartBtn();

function refreshResultsOnStartBtn(){
    playerResult.innerHTML = `Player: ${playerScore}`;
    computerResult.innerHTML = `Computer: ${computerScore}`;
}

startNewGame.addEventListener('click', () => {
    gameContent.style.pointerEvents = 'auto';
    overlay.style.display = 'none';
    playerScore = 0;
    computerScore = 0;
    refreshResultsOnStartBtn();
})

gameBtns.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        game.defineGameRules();
        refreshResultsOnStartBtn();
        if(playerScore == 5 || computerScore == 5){
            overlay.style.display = 'block';
            gameContent.style.pointerEvents = 'none';
        }
    })
})