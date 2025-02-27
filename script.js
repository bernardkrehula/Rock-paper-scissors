let startNewGame = document.querySelector('.start-overlay button');
let gameBtns = document.querySelectorAll('.playing-hands button');
let main = document.querySelector('.main');

let playerChoice; 
let computerChoice;
let playerScore;
let computerScore;

//2 varijable let playerChoice i computerChoice
//let playerScore i computerScore
const computerChoices = ['rock', 'paper', 'scissors'];

gameBtns.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        // console.log(playerChoice)
        getRandomChoices();
        defineGameRules();
    })
})
function getRandomChoices(){
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
function defineGameRules() {
    if(playerChoice == computerChoice){
        console.log('tie');
    }
    else {
        switch(playerChoice) {
            case 'rock':
                (computerChoice == 'scissors') ? console.log('Pobijedio si') : console.log('Izgubio si');
                break;
            case 'paper':
                (computerChoice == 'rock') ? console.log('Pobijedio si') : console.log('Izgubio si');
                break;
            case 'scissors':
                (computerChoice == 'paper') ? console.log('Pobijedio si') : console.log('Izgubio si');
                break;
            }
    }
}
function addPointToPlayer() {

}