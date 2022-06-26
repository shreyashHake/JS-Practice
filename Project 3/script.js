"use strict";

// Creatin variables
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// setting initial score to 0 and hidding the dice.
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// adding responce to roll btn
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generate the random number in [1 , 6]
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Selcting corresponding dice to display
    diceEl.classList.remove("hidden");
    diceEl.src = `Images/dice-${dice}.png`;

    // 3. checking if dice rolled 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

// adding response to hold button
btnHold.addEventListener("click", function () {
  if (playing) {
    // updating the current score
    console.log(currentScore);
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    console.log(score[activePlayer]);

    // check for winner
    if (score[activePlayer] >= 20) {
      playing = false;

      // removing dice, dice button and hold button
      diceEl.classList.add("hidden");
      document.querySelector(".btn--roll").classList.add("hidden");
      document.querySelector(".btn--hold").classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      
      document
        .getElementById(`name--${activePlayer}`)
        .textContent = "Winner 🥳";
      
      document
        .getElementById(`name--${activePlayer === 0 ? 1 : 0}`)
        .textContent = "Better Luck Next Time 😇";

    } else {
      // switch the player
      switchPlayer();
    }
  }
});
