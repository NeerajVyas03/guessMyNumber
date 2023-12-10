'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let message = document.querySelector('.message');
let score = 20;
let highscore = 0;
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  console.log(number);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  message.textContent = 'Enter a number!!';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'Enter a number!!';
  } else if (guess === number) {
    message.textContent = 'You Won!!!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess > number) {
    message.textContent = 'Too high!!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lost!!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess < number) {
    message.textContent = 'Too low!!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lost!!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

console.log(number);
