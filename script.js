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
    const computerSelection = computerPlay();
    const playerSelection = e.srcElement.id;
    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            console.log("Congratulations! You Win!");
        } else {
            console.log("You lose! Paper beats rock");
        }
    }
}

/* function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == computerSelection) {
      return "It's a tie!"
  } else if (playerSelection.toLowerCase() == "rock") {
      if (computerSelection == "scissors") {
          console.log("You Win! Rock beats scissors")
          return true
      } else {
          console.log("You Lose! Paper beats rock")
          return false
      }
  } else if (playerSelection.toLowerCase() == "scissors") {
      if (computerSelection == "paper") {
          console.log("You Win! Scissors beats paper")
          return true
      } else {
          console.log("You Lose! Rock beats scissors")
          return false
      }
  } else if (playerSelection.toLowerCase() == "paper") {
      if (computerSelection == "rock") {
          console.log("You Win! Paper beats rock")
          return true
      } else {
          console.log("You Lose! Scissors beats paper")
          return false
      }
  }
} */

/* function game() {
  let playerScore = 0;
  let computerScore = 0;
    if (playRound(prompt("Enter rock, paper, or scissors"), computerPlay())) {
        playerScore++
    } else {
        computerScore++
    }

  if (playerScore > computerScore) {
      console.log("You win the game!")
  } else {
      console.log("You lose the game!")
  }
} */