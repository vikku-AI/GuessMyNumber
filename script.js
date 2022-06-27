'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// event handler do not call the when this call fucntion will call when event as sooon as done.
document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;

  //   when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number';

    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   score--;
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💥 you Lost The game';
    }
  }

  //   when guess is correct
  else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '↗️ Number is too high' : 'Number is too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   score--;
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💥 you Lost The game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
