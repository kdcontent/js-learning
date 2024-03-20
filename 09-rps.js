let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

updateScoreElement();



function pickComputerMove () {
  const randomNumber = Math.random();
  let computerMove = '';

   if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
  return computerMove;
}

function playGame (playerMove) {
  const computerMove = pickComputerMove();

  let result = '';
  if (playerMove === 'Rock') {
  if (computerMove === 'Rock') {
    result = 'Tie.';
  } else if (computerMove === 'Paper') {
    result = 'You lost.';
  } else if (computerMove === 'Scissors') {
    result = 'You win.';
  }
} else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You win.';
    } else if (computerMove === 'Paper') {
      result = 'Tie.';
    } else if (computerMove === 'Scissors') {
      result = 'You lost.';
    }

} else if (playerMove === 'Scissors') {
  if (computerMove === 'Rock') {
    result = 'You lost.';
  } else if (computerMove === 'Paper') {
    result = 'You win.'
  } else if (computerMove === 'Scissors') {
    result = 'Tie.'
  }
}

if (result === 'You win.') {
  score.wins += 1;
} else if (result === 'You lost.') {
  score.loses += 1;
} else if (result === 'Tie.') {
  score.ties += 1;
}


  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;


  function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}; Losses: ${score.loses}; Ties: ${score.ties};`
  }

  }
