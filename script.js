function computerPlay() {
  let rand = Math.random();
  if (rand <= 0.33) {
      return "rock";
  } else if (rand > 0.33 && rand <= 0.66) {
      return "paper";
  } else {
      return "scissors";
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound)
});

function playRound(e) {
    const div = document.querySelector('#result');

    const computerSelection = computerPlay();
    const playerSelection = e.srcElement.id;
    if (playerSelection == computerSelection) {
        div.textContent = "It's a tie!";
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {

            div.textContent = "Congratulations! You Win!"
        } else {
            div.textContent = "You lose! Paper beats rock.";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            div.textContent = "Congratulations! You Win!";
        } else {
            div.textContent = "You lose! Scissors beats paper";
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            div.textContent = "Congratulations! You Win!"
        } else {
            div.textContent = "You lose! Rock beats scissors."
        }
    }
}