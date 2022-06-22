"use strict";

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "🎉 Correct Number";

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// When check button is clicked ...
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When no input is given
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";

    // When input is a correct guess
  } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "🎉 Correct Number";
      highScore = Math.max(guess, highScore);
      document.querySelector(".highscore").textContent = highScore;

    // Manipulation the CSS :
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".restart").textContent =
          "Restart to Play Again!💫";

    // When input is higher than the secreatNumber
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score--;
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent =
        "❌❌ You loose the game!";
    document.querySelector(".number").style.width = "30rem";
      document.querySelector("body").style.backgroundColor = "#e64343";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".restart").textContent = "Restart to Play Again!💫";
    }

    // When input is smaller than the secreatNumber
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score--;
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "❌❌ You loose the game!";
    document.querySelector(".number").style.width = "30rem";
      document.querySelector("body").style.backgroundColor = "#e64343";
      document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".restart").textContent =
          "Restart to Play Again!💫";
    }
  }
});


// When again button is clicked 
document.querySelector(".again").addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    highScore = 0;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = '?';
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
     document.querySelector(".restart").textContent = "Guess My Number!";
});