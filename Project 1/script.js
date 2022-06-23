"use strict";

let secretNumber = Math.trunc(Math.random() * 100 + 1);
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function displaySecretNumber(secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
}

function displayHighscore(highScore) {
  document.querySelector(".highscore").textContent = highScore;
}

function displayScore(score) {
  document.querySelector(".score").textContent = score;
}

function restart() {
  document.querySelector(".restart").textContent = "Play Again!💫";
}

function won() {
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector(".number").style.width = "30rem";
  restart();
}

function lost() {
  document.querySelector(".number").style.width = "30rem";
  document.querySelector("body").style.backgroundColor = "#e64343";
  restart();
}

function restartGame() {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".restart").textContent = "Guess My Number!";
}

// When check button is clicked ...
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When no input is given
  if (!guess) {
    displayMessage("⛔ No number!");
  }

  // When input is a correct guess
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number");
    highScore = Math.max(score, highScore);
    displayHighscore(highScore);
    displaySecretNumber(secretNumber);
    won();
  }

  // When input is not equal to the secreatNumber
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? `📈 ${guess} is Too high!`
          : `📉 ${guess} is Too low!`
      );
      score--;
      displayScore(score);
    } else {
      score--;
      displayScore(0);
      displayMessage("💥 You lost the game!");
      displaySecretNumber(secretNumber);
      lost();
    }
  }
});

// When again button is clicked
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 100 + 1);
  score = 20;
  displayMessage("Start guessing...");
  displayScore(score);
  restartGame();
});
