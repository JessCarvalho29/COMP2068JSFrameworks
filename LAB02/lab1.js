var prompt = require('prompt');

prompt.start();

function askUserMove(){
  prompt.get(['userResponse'], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  
  let userMove = result.userResponse.toLowerCase();

  if (userMove !== 'rock' && userMove !== 'paper' && userMove !== 'scissors') {
      console.log("Invalid option. Please choose between ROCK, PAPER, or SCISSORS.");
      askUserMove();
  } else {
      playGame(userMove);
  }
});

}

function playGame(userMove){
    const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber < 0.34) {
    computerMove = 'paper';
  } else if (randomNumber < 0.35 && randomNumber < 0.67) {
    computerMove = 'scissors';
  } else {
    computerMove = 'rock';
  }

  let finalResult = '';

  if (userMove === computerMove) {
    finalResult = "It's a tie";
  } else if (
    (userMove === 'rock' && computerMove === 'scissors') ||
    (userMove === 'paper' && computerMove === 'rock') ||
    (userMove === 'scissors' && computerMove === 'paper')
  ) {
    finalResult = 'User wins!';
  } else if (
    userMove === 'rock' || userMove === 'paper' || userMove === 'scissors'
  ) {
    finalResult = 'Computer wins!';
  } else {
    finalResult = 'Invalid input!';
  }

  console.log(`You picked ${userMove}. Computer picked ${computerMove}. ${finalResult}`);
}

askUserMove();