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

// setting initial score to 0 and hidding the dice.
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const score = [0, 0]; 
let currentScore = 0;
let activePlayer = 0;

// adding responce to roll btn
btnRoll.addEventListener("click", function () {
  // 1. Generate the random number in [1 , 6]
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Selcting corresponding dice to display
  diceEl.classList.remove("hidden");
  diceEl.src = `Images/dice-${dice}.png`;

  // 3. checking if dice rolled 1
  if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // Switch player
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle("player--active");
      player1El.classList.toggle("player--active");
  }
});
