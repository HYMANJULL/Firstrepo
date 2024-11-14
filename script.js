// script.js

const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const choices = document.querySelectorAll(".choice");

// Load sound files
const clickSound = new Audio("sounds/click.mp3");
const winSound = new Audio("sounds/win.mp3");
const loseSound = new Audio("sounds/lose.mp3");

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    clickSound.play(); // Play click sound on choice
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result, playerChoice, computerChoice);
    updateScore(result);
    playResultSound(result); // Play sound based on result
    animateResult(result);
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function displayResult(result, playerChoice, computerChoice) {
  if (result === "win") {
    resultText.textContent = `You won! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}!`;
    resultText.classList.add("win");
  } else if (result === "lose") {
    resultText.textContent = `You lost! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}!`;
    resultText.classList.add("lose");
  } else {
    resultText.textContent = "It's a draw!";
    resultText.classList.add("draw");
  }
  setTimeout(() => {
    resultText.classList.remove("win", "lose", "draw");
  }, 1000);
}

function updateScore(result) {
  if (result === "win") {
    playerScore++;
    playerScoreElement.textContent = playerScore;
  } else if (result === "lose") {
    computerScore++;
    computerScoreElement.textContent = computerScore;
  }
}

function playResultSound(result) {
  if (result === "win") {
    winSound.play();
  } else if (result === "lose") {
    loseSound.play();
  }
}

function animateResult(result) {
  resultText.classList.add("animated");
  setTimeout(() => resultText.classList.remove("animated"), 500);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
