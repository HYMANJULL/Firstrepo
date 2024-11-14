// script.js

const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const choices = document.querySelectorAll(".choice");

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result, playerChoice, computerChoice);
    updateScore(result);
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
    resultText.style.color = "#4CAF50";
  } else if (result === "lose") {
    resultText.textContent = `You lost! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}!`;
    resultText.style.color = "#FF5252";
  } else {
    resultText.textContent = "It's a draw!";
    resultText.style.color = "#FFB74D";
  }
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

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
