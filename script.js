let startNewGameBtn = document.querySelector(".start-overlay button");
let gameBtns = document.querySelectorAll(".playing-hands button");
let playerResult = document.querySelector(".player-result h2");
let computerResult = document.querySelector(".computer-result h2");
let startNewGameOverlay = document.querySelector(".start-overlay");
let gameContent = document.querySelector(".game-content");
let weapon = document.querySelector(".weapon");
let outcome = document.querySelector(".outcome");

function makeGameRules() {
  let playerChoice;
  let computerChoice;
  let playerScore = 0;
  let computerScore = 0;

  const computerChoices = ["rock", "paper", "scissors"];

  const defineGameRules = (buttonId) => {
    getRandomComputerChoice();
    playerChoice = buttonId;
    if (playerChoice == computerChoice) {
      weapon.innerHTML = `It's a tie !`;
      outcome.innerHTML = `${playerChoice} ties with ${computerChoice}`;
    } else {
      switch (playerChoice) {
        case "rock":
          if (computerChoice == "scissors") {
            addPointToPlayer();
            weapon.innerHTML = "Player won!";
            outcome.innerHTML = `Rock beats ${computerChoice}`;
          } else {
            addPointToComputer();
            weapon.innerHTML = "Computor won!";
            outcome.innerHTML = `${computerChoice} beats Rock`;
          }
          break;
        case "paper":
          if (computerChoice == "rock") {
            addPointToPlayer();
            weapon.innerHTML = "Player won!";
            outcome.innerHTML = `Paper beats ${computerChoice}`;
          } else {
            addPointToComputer();
            weapon.innerHTML = "Computor won!";
            outcome.innerHTML = `${computerChoice} beats Paper`;
          }
          break;
        case "scissors":
          if (computerChoice == "paper") {
            addPointToPlayer();
            weapon.innerHTML = "Player won!";
            outcome.innerHTML = `Sissors beats ${computerChoice}`;
          } else {
            addPointToComputer();
            weapon.innerHTML = "Computor won!";
            outcome.innerHTML = `${computerChoice} beats Sissors`;
          }
          break;
      }
    }
  };
  const addPointToPlayer = () => {
    playerScore += 1;
  };
  const addPointToComputer = () => {
    computerScore += 1;
  };
  const getPlayerScore = () => playerScore;

  const getComputerScore = () => computerScore;

  const resetPlayerAndComputerScore = () => {
    playerScore = 0;
    computerScore = 0;
  }

  const getRandomComputerChoice = () => {
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return computerChoice;
  };
  return { defineGameRules, getRandomComputerChoice, addPointToPlayer, addPointToComputer, getPlayerScore, getComputerScore, resetPlayerAndComputerScore };
}
const game = makeGameRules();

refreshResultsOnStartBtn();

function refreshResultsOnStartBtn() {
  playerResult.innerHTML = `Player: ${game.getPlayerScore()}`;
  computerResult.innerHTML = `Computer: ${game.getComputerScore()}`;
}

startNewGameBtn.addEventListener("click", () => {
  gameContent.style.pointerEvents = "auto";
  startNewGameOverlay.style.display = "none";
  game.resetPlayerAndComputerScore();
  refreshResultsOnStartBtn();
});

gameBtns.forEach((button) => {
  button.addEventListener("click", () => {
    game.defineGameRules(button.id);
    game.defineGameRules();
    refreshResultsOnStartBtn();
    if (game.getPlayerScore() == 5 || game.getComputerScore() == 5) {
      startNewGameOverlay.style.display = "block";
      gameContent.style.pointerEvents = "none";
    }
  });
});
