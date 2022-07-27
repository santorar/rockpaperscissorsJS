/* 
  Rock, Paper, Scissors
  This program needs to be a rock, paper, Scissors game, this game is going to be played completely form the console
  The user needs to choice and the computer will make a choice randomly
  Make a function that plays a single round of Rock Paper Scissors. the function should take two parameters, the player Selection and the computerSelection
  And then return a string that declares the winner of the round
  (the user input needs to be case insensitive)
*/
// declare a function to get the computer choice
function getComputerChoice() {
  // first generate a random number between one and three
  let choice = Math.trunc(Math.random() * 3) + 1
  // if choice is equal to 1 then the computer choice will be rock
  if (choice === 1) return 'rock'
  // if choice is equal to 2 then the computer choice will be paper
  else if (choice === 2) return 'paper'
  // if choice is equal to 3 then the computer choice will be scissors
  else return 'scissors'
}
// function to get the player player Choice
function getPlayerChoice() {
  //gets the player input and lowercase it
  let choice = prompt('Select rock paper or scissors').toLowerCase()
  // checks if the choice is right and if it's not, then print invalid choice and ask for the choice again
  if (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
    console.log('invalid choice')
    return getPlayerChoice()
  } else return choice
}
// function that compare the player and the computer choice and return the winner
function rpsRound(playerChoice, computerChoice) {
  // checks if the choices are equal and return that it's a tie
  console.log("player chose: " + playerChoice)
  console.log("computer chose: " + computerChoice)
  if (playerChoice == computerChoice) return "it's a tie"
  // checks if the player wins
  if (playerChoice == 'rock' && computerChoice == 'scissors')
    return 'Player Wins'
  if (playerChoice == 'paper' && computerChoice == 'rock') 
    return 'Player Wins'
  if (playerChoice == 'scissors' && computerChoice == 'paper')
    return 'Player Wins'
  // checks if the computer Wins
  if (computerChoice == 'rock' && playerChoice == 'scissors')
    return 'Computer Wins'
  if (computerChoice == 'paper' && playerChoice == 'rock')
    return 'Computer Wins'
  if (computerChoice == 'scissors' && playerChoice == 'paper')
    return 'Computer Wins'
}
// function that calls rpsRound and plays 5 times keeps the score and return the winner and the loser at the end.
function game() {
  // declare the scores and the round result
  let scorePlayer = 0
  let scoreComputer = 0
  let roundResult
  // plays 5 rounds checks the winner and add's 1 point to him
  // then display the winner and the actual points
  for (let i = 0; i < 5; i++){
    roundResult = rpsRound(getPlayerChoice(),getComputerChoice())
    if (roundResult == "Player Wins") scorePlayer++
    if (roundResult == "Computer Wins") scoreComputer++
    console.log(roundResult)
    console.log("Player Score: " + scorePlayer)
    console.log("Computer Score: " + scoreComputer)
  }
  // checks who has the most points and return the winner
  if(scorePlayer > scoreComputer) console.log("The final winner is the player")
  else if(scorePlayer < scoreComputer) console.log("The final winner is the computer")
  else console.log("it's a tie")
}
//calls the actual game
game()
