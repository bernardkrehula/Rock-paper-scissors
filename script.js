let startNewGame = document.querySelector('.start-overlay button');
let gameBtns = document.querySelectorAll('.playing-hands button');
let main = document.querySelector('.main');

/* function manageGameOperations(){
    let gameArray = [0, 1, 2];
    const generateRandomHand = (randomNumber) => {
        randomNumber = gameArray[Math.floor(gameArray.length * Math.random())]
        return randomNumber;
    }
    const gameRules = (index) => {
        if(index == generateRandomHand()){
            console.log('tie')
        }
        if(index < )
    }

    return { gameRules, generateRandomHand }
}
const manager = manageGameOperations();


createStartNewGame()

function createStartNewGame() {
    const html = 
    `<div class="start-overlay">
            <button>Start new game</button>
    </div>`;
    main.insertAdjacentHTML('beforeend', html);
    startNewGame = document.querySelector('.start-overlay button');
}
function removeCreateStartNewGame(div) {
    main.removeChild(div)
}
*/


//Kontent glavne igrice prebaciti u index html
//Modal takoder u html a moze se napraviti neka javascript funkcija show modal
//


/* function createGameContent() {
    const html = 
    `
    <div class="game-content">
            <h2>Choose your weapon</h2>
            <h3>First to 5 points wins the game</h3>
            <div class="results">
                <div class="player-result">
                    <h1>?</h1>
                    <h2>Player: 0</h2>
                </div>
                <div class="computer-result">
                    <h1>?</h1>
                    <h2>Computer: 0</h2>
                </div>
            </div>
            <li class="playing-hands">
                <button>✊</button>
                <button>✋</button>
                <button>✌️</button>
            </li>
        </div>
    `;
    main.insertAdjacentHTML('beforeend', html);
}
startNewGame.addEventListener('click', (event) => {
    let div = event.target.closest('div');
    createGameContent();
    removeCreateStartNewGame(div)

    gameBtns = document.querySelectorAll('.playing-hands button');
    gameBtns.forEach((button, index) => {
        button.addEventListener('click', () => {
            manager.gameRules(index);
            manager.generateRandomHand();
        })
    })
})
main.addEventListener('click', () => {
    
}) 
*/


//2 varijable let playerChoice i computerChoice
//let playerScore i computerScore
const computerChoices = ['rock', 'paper', 'sissors'];