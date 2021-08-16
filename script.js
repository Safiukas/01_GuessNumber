'use strict';

// Random number generator
let number = Math.trunc(Math.random() * 20) + 1;

// Defining score
let score = 20;

// Defining highscore
let highScore = 0;

// Message shortcut
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check button initialize
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No  number!');

    // When player wins
  } else if (guess === number) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = number;

    // Changing backround color if number correct
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Changing random number width
    document.querySelector('.number').style.width = '30rem';

    // Setting up highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number ? 'Number is too high!' : 'Number is too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Play again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
