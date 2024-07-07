function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomElement = Math.floor(Math.random() * choices.length);
  return choices[randomElement];
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
      return "Invalid choice. Please enter Rock, Paper or Scissors.";
  }
}

console.log(getHumanChoice());
