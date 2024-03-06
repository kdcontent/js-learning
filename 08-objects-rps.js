// Rock, Papers and Scissors with objects

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
let result = '';

function pickComputerMove () {

  let computerMove = '';

  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';

  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }


  return computerMove;
  }


  function playGame(playerMove) {
    const computerMove = pickComputerMove();

        if (playerMove === 'Scissors') {
          if (computerMove === 'Rock') {
            result = 'You lost.';
          } else if(computerMove === 'Paper') {
            result = 'You win.';
          } else if (computerMove === 'Scissors') {
            result = 'Tie.';
          }
          if (result === 'You win.') {
            score.wins = score.wins + 1;
          } else if  (result === 'You lost.') {
            score.losses = score.losses + 1;
          } else if (result === 'Tie.') {
            score.ties = score.ties + 1;
          }

        }
        localStorage.setItem('score', JSON.stringify(score));

        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\n ` + `Wins: ${score.wins}. Losses: ${score.losses}.  Ties: ${score.ties}`
        );

        if (playerMove === 'Rock') {
          if (computerMove === 'Rock') {
            result= 'Tie.';
          } else if(computerMove === 'Paper') {
            result = 'You lose.';
          } else if (computerMove === 'Scissors') {
            result = 'You win.'
          }
          if (result === 'You win.') {
            score.wins = score.wins + 1;
          } else if  (result === 'You lost.') {
            score.losses = score.losses + 1;
          } else if (result === 'Tie.') {
            score.ties = score.ties + 1;
          }

        }
        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\n ` + `Wins: ${score.wins}. Losses: ${score.losses}.  Ties: ${score.ties}`);

        if (playerMove === 'Paper') {
          result = '';
          if (computerMove === 'Paper') {
            result= 'Tie.';
          } else if(computerMove === 'Rock') {
            result = 'You win.';
          } else if (computerMove === 'Scissors') {
            result = 'You lose.';
          }
        }

        if (result === 'You win.') {
          score.wins =  score.wins + 1;
        } else if  (result === 'You lost.') {
          score.losses = score.losses + 1;
        } else if (result === 'Tie.') {
          score.ties = score.ties + 1;
        }

        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\n ` + `Wins: ${score.wins}. Losses: ${score.losses}.  Ties: ${score.ties}` + `Ties: ${score.ties}\n`
        );

        if (playerMove === 'Reset') {
          score.wins = 0;
          score.losses = 0;
          score.ties = 0;
          localStorage.removeItem(score);
        }
        alert(`Score is reset. Wins: ${score.wins}. Losses: ${score.losses}.  Ties: ${score.ties}`);





  }