const score = {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove){

  const computerMove = pickComputerMove();

  let result = '';

if(playerMove === 'scissors'){

  if(computerMove === 'rock') {
     result = 'You Lost.'

  } else if (computerMove === 'paper'){
     result = 'You Won.'

  } else if (computerMove === 'scissors'){
     result = 'Tie.'
  }
}else if(playerMove === 'paper'){

     if(computerMove === 'rock') {
     result = 'You Won.'

  } else if (computerMove === 'paper'){
     result = 'Tie.'

  } else if (computerMove === 'scissors'){
     result = 'You Lost.'
  }

}else if (playerMove === 'rock')

  {
     if(computerMove === 'rock') {
     result = 'Tie.'
  } else if (computerMove === 'paper'){
     result = 'You Lost.'
  } else if (computerMove === 'scissors'){
     result = 'You Won.'
  }

}

if(result === 'You Won.'){
     score.wins += 1;
}else if(result === 'You Lost.'){
  score.losses += 1;
}else if (result === 'Tie.'){
  score.ties += 1;
}

updateScoreElement();

document.querySelector('.js-result').innerHTML = result; 

document.querySelector('.js-moves').innerHTML = ` You
  <img src="${playerMove}-emoji.png" alt="" class="icons">
computer
  <img src="${computerMove}-emoji.png" alt="" class="icons">`


}

function updateScoreElement(){

  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

function pickComputerMove(){

  const randomNumber = Math.random();

let computerMove = '';

if(randomNumber >=0 && randomNumber < 1/3) {
 computerMove = 'rock';
}

else if(randomNumber >=1/3 && randomNumber < 2/3) {
 computerMove = 'paper';
} 
else if (randomNumber >=2/3 && randomNumber < 1) {
 computerMove = 'scissors';
}
 
return computerMove;

}
