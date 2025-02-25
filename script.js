let startNewGame = document.querySelector('.start-overlay button');
let main = document.querySelector('.main');

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
function createGameContent() {
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
})