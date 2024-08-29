//CHOICES ARRAY//
const choices = ["rock", "paper", "scissors"];

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
  } else {
    resultMessage = "You lose!";
  }

  //DISPLAYING RESULT//
  let resultDiv = document.getElementById("result");
  resultDiv.textContent(
    `${resultMessage} You chose ${humanChoice}, computer chose ${computerChoice}.`
  );
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
