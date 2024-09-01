//CHOICES ARRAY//
const choices = ["rock", "paper", "scissors"];

//SCORE VARIABLES//
let humanScore = 0;
let computerScore = 0;

//GETTING COMPUTER CHOICE//
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

//PLAY ROUND FUNCTION//
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = "It's a draw!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    resultMessage = "You win!";
    humanScore++;
  } else {
    resultMessage = "You lose!";
    computerScore++;
  }

  //DISPLAYING THE RESULT//
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `You chose: ${humanChoice}. Computer chose: ${computerChoice}. ${resultMessage}`;

  const scoreDiv = document.getElementById("score");
  scoreDiv.textContent = `Score: You - ${humanScore}, Computer - ${computerScore}`;

  //CHECK IF SOMEONE HAS REACHED 5 POINTS//
  if (humanScore === 5) {
    resultDiv.textContent += " Congratulations! You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultDiv.textContent += " Sorry, the computer won the game.";
    disableButtons();
  }
}

//EVENT LISTENERS//
document.getElementById("rock").addEventListener("click", function () {
  playRound("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  playRound("scissors");
});
