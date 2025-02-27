let startNewGame = document.querySelector('.start-overlay button');
let gameBtns = document.querySelectorAll('.playing-hands button');
let main = document.querySelector('.main');
let playerResult = document.querySelector('.player-result h2');
let computerResult = document.querySelector('.computer-result h2');
let overlay = document.querySelector('.start-overlay');
let gameContent = document.querySelector('.game-content');

let playerChoice; 
let computerChoice;
let playerScore = 0;
let computerScore = 0;

playerResult.innerHTML = `Player: ${playerScore}`;
computerResult.innerHTML = `Computer: ${computerScore}`;
//2 varijable let playerChoice i computerChoice
//let playerScore i computerScore
const computerChoices = ['rock', 'paper', 'scissors'];

function getRandomChoices(){
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
function defineGameRules() {
    if(playerChoice == computerChoice){
        // console.log('tie');
    }
    else {
        switch(playerChoice) {
            case 'rock':
                (computerChoice == 'scissors') ? addPointToPlayer() : addPointToComputer();
                break;
            case 'paper':
                (computerChoice == 'rock') ? addPointToPlayer() : addPointToComputer();
                break;
            case 'scissors':
                (computerChoice == 'paper') ? addPointToPlayer() : addPointToComputer();
                break;
            }
    }
}
function addPointToPlayer() {
    playerScore++;
}
function addPointToComputer(){
    computerScore++;
}
gameBtns.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        getRandomChoices();
        defineGameRules();
        playerResult.innerHTML = `Player: ${playerScore}`;
        computerResult.innerHTML = `Computer: ${computerScore}`;
        if(playerScore == 5 || computerScore == 5){
            overlay.style.display = 'block';
            gameContent.style.pointerEvents = 'none';
        }
    })
})
startNewGame.addEventListener('click', () => {
    gameContent.style.pointerEvents = 'auto';
    overlay.style.display = 'none';
    playerScore = 0;
    computerScore = 0;
})

function makeGameRules(){
    const computerChoices = [];
    const defineGameRules = () => {
        if(playerChoice == computerChoice){
            console.log('tie');
        }
        else {
            switch(playerChoice) {
                case 'rock':
                    (computerChoice == 'scissors') ? addPointToPlayer() : addPointToComputer();
                    break;
                case 'paper':
                    (computerChoice == 'rock') ? addPointToPlayer() : addPointToComputer();
                    break;
                case 'scissors':
                    (computerChoice == 'paper') ? addPointToPlayer() : addPointToComputer();
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
    const getRandomChoices = () => {
        computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        return computerChoice;
    }
    return { getRandomChoices, defineGameRules }
}
const game = makeGameRules();