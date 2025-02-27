let startNewGame = document.querySelector('.start-overlay button');
let gameBtns = document.querySelectorAll('.playing-hands button');
let main = document.querySelector('.main');

let playerChoice; 
let computerChoice;
let playerScore;
let computerScore;

//2 varijable let playerChoice i computerChoice
//let playerScore i computerScore
const computerChoices = ['rock', 'paper', 'sissors'];

gameBtns.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.id;
        console.log(playerChoice)
        computerChoice = getRandomChoices();
    })
})
function getRandomChoices(){
    console.log(computerChoices[Math.floor(Math.random() * computerChoices.length)]);
}
function defineGameRules() {
    if(playerChoice == computerChoice){
        console.log('tie');
    }
}