'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let gameRunning = true;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const setCurrentScore = function (score, player) {
  document.getElementById(`current--${player}`).textContent = score;
};

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (gameRunning) {
    // 1. Generate random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. If number is 1, switch players
    if (dice !== 1) {
      currentScore += dice;
      setCurrentScore(currentScore, activePlayer);
    } else {
      switchPlayer();
    }
  }
});

// Hold button functionality
btnHold.addEventListener('click', () => {
  if (gameRunning) {
    // 1. Adding to the total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Checking for winner
    if (scores[activePlayer] >= 20) {
      gameRunning = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      setCurrentScore(0, activePlayer);
    } else {
      switchPlayer();
    }
  }
});

// Reset game functionality
btnNew.addEventListener('click', () => {
  // 1. Reset game state
  gameRunning = true;
  // 2. Reset active player
  activePlayer = 0;
  // 3. Reset total and current scores
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  setCurrentScore(currentScore, 0);
  setCurrentScore(currentScore, 1);
  score0El.textContent = 0;
  score1El.textContent = 0;
  // 4. Show dice
  diceEl.classList.remove('hidden');
  // 5. Remove winner class
  if (player0El.classList.contains('player--winner')) {
    player0El.classList.remove('player--winner');
    player0El.classList.add('player--active');
  } else {
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
  }
});
