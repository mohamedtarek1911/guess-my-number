'use strict';

// document.querySelector(".message").textContent= "Goooood This Correct Number !!!"
// const number =Math.trunc(Math.random()*20)+1 ;  // to make random number between (0,20)
// document.querySelector(".number").textContent= number;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = document.getElementById('score');
let scoreNum = 20;
let highScore = 0;
let message = document.querySelector('.message');
let again = document.querySelector('.again');
let body = document.querySelector('body');
// let number1 =document.querySelector(".number");
let check = document.querySelector('.check');
let guess = Number(document.querySelector('.guess').value);
check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when no input number
  if (!guess) {
    message.textContent = '  No Number !!!🥵🥵🤬🤬';
  }
  // when input correct number
  else if (guess === secretNumber) {
    message.textContent = ' 🎉🎉 correct Number !';
    document.querySelector('.number').textContent = secretNumber;

    body.style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';

    if (scoreNum > highScore) {
      highScore = scoreNum;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // when number is too high
  else if (guess > secretNumber) {
    if (scoreNum > 1) {
      message.textContent = '📈 Too High !!';
      scoreNum--;
      score.textContent = scoreNum;
    } else {
      message.textContent = '😝😝You Lost The Game';
      body.style.backgroundColor = 'rgb(206, 13, 13)';
      score.textContent = 0;
    }

    // scoreNum--;
  }

  // when number is too low
  else if (guess < secretNumber) {
    if (scoreNum > 1) {
      message.textContent = '📉 Too Low !!';
      scoreNum--;
      score.textContent = scoreNum;
    } else {
      message.textContent = '😝😝You Lost The Game';
      body.style.backgroundColor = 'rgb(206, 13, 13)';
      score.textContent = 0;
    }

    // message .textContent ="📉 Too Low !!"
    // scoreNum--;
    // score.textContent=scoreNum;
  }
});

again.addEventListener('click', function () {
  message.textContent = 'Start guessing...';
  score.textContent = '20';
  body.style.backgroundColor = ' #222';
  // number1.style.width="15rem";
  // guess.value="";
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreNum = 20;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
