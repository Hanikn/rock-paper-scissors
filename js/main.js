//CHOICES ARRAY//
const choices = ["rock", "paper", "scissors"];

//GETTING COMPUTER CHOICE//
function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

//GETTING HUMAN CHOICE//
function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

  if (choices.includes(humanChoice)) {
    return humanChoice;
  } else {
    alert("Invalid choice. Please try again.");
  }
}

//PLAY GAME FUNCTION//
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Draw!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log("You win!");
      humanScore++;
    } else {
      console.log("You lose!");
      computerScore++;
    }
    console.log(`Scores: You - ${humanScore}, Computer - ${computerScore}`);
  }

  //PLAY 5 ROUNDS//
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  //DECLARE WINNER//
  if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game! Better luck next time.");
  } else {
    console.log("Draw!");
  }
}

playGame();
