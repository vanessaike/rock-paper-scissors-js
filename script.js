"use strict";

// ELEMENTS
// buttons
const btnRock = document.getElementById("btn-rock-1");
const btnPaper = document.getElementById("btn-paper-2");
const btnScissors = document.getElementById("btn-scissors-3");
const btnNewGame = document.querySelector(".btn--new-game");

// displayed icons
const userChoice = document.getElementById("icon--user");
const pcChoice = document.getElementById("icon--pc");

// scores in the UI
const scorePcElement = document.querySelector(".score--pc");
const scoreUserElement = document.querySelector(".score--user");

// MUTABLE VARIABLES
let scorePc, scoreUser, randomNum;

// FUNCTIONS
// generate random number (1: rock, 2: paper, 3: scissors)
const generateNum = () => Math.trunc(Math.random() * 3) + 1;

// calculate the scores
const userWins = function () {
  scoreUser += 10;
  scoreUserElement.textContent = scoreUser;
};

const pcWins = function () {
  scorePc += 10;
  scorePcElement.textContent = scorePc;
};

// display the icons
const displayChoice = function () {
  userChoice.classList.remove("hidden");
  pcChoice.classList.remove("hidden");
};

// initialization
const init = function () {
  // cleaning the scores
  scoreUser = 0;
  scorePc = 0;
  scorePcElement.textContent = scorePc;
  scoreUserElement.textContent = scoreUser;
  // cleaning the choices
  userChoice.classList.add("hidden");
  pcChoice.classList.add("hidden");
};
init();

// EVENTS
btnRock.addEventListener("click", function () {
  // user
  userChoice.src = "img/hand-1.png";
  // pc
  randomNum = generateNum();
  pcChoice.src = `img/hand-${randomNum}.png`;

  displayChoice();

  if (randomNum === 2) {
    pcWins();
  } else if (randomNum === 3) {
    userWins();
  }
});

btnPaper.addEventListener("click", function () {
  //user
  userChoice.src = "img/hand-2.png";
  //pc
  randomNum = generateNum();
  pcChoice.src = `img/hand-${randomNum}.png`;

  displayChoice();

  if (randomNum === 3) {
    pcWins();
  } else if (randomNum === 1) {
    userWins();
  }
});

btnScissors.addEventListener("click", function () {
  //user
  userChoice.src = "img/hand-3.png";
  //pc
  randomNum = generateNum();
  pcChoice.src = `img/hand-${randomNum}.png`;

  displayChoice();

  if (randomNum === 1) {
    pcWins();
  } else if (randomNum === 2) {
    userWins();
  }
});

// new game
btnNewGame.addEventListener("click", init);
