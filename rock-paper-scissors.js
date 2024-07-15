function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const userInput = prompt("Rock, Paper, or Scissors?");
  const formattedInput = userInput.toLowerCase();

  switch (formattedInput) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
    default:
      console.log("Invalid choice. Please enter Rock, Paper or Scissors.");
      return getHumanChoice(); // Повторно запрашиваем выбор, если ввод некорректный
  }
}

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (human === computer) {
    console.log(`Draw! Both chose ${humanChoice}`);
    return "draw";
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "scissors" && computer === "paper") ||
    (human === "paper" && computer === "rock")
  ) {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    return "human";
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return "computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  }

  console.log(
    `Final score: Human - ${humanScore}, Computer - ${computerScore}`
  );
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game is a draw!");
  }
}

playGame();
