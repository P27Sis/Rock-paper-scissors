console.log("Hello world")

//Create a function that returns either rock, paper or scissors.
var cpuChoice = ""
//Math.floor rounds off an integer, whereas math.random picks a random value
function getComputerChoice(){
    var values = ["rock", "paper", "scissors"]
    selectedValue = values[Math.floor(Math.random() * values.length)];
    //return selectedValue
    cpuChoice = selectedValue

}
var playChoice = ""

//getPlayerChoice promts the user for input which is converted to lower case
function getPlayerChoice(){
    let playerChoice = prompt("Type 'rock', 'paper' or 'scissors'");
    if (playerChoice.toLowerCase()==="rock"){
        alert("you picked rock")
    }
    else if (playerChoice.toLowerCase()==="scissors"){
        alert("You picked scissors")
    }
    else if (playerChoice.toLowerCase()==="paper"){
        alert("you picked paper")
    }
    else getPlayerChoice()
    //return playerChoice;
    playChoice = playerChoice

}



let totalPlayerPoints = 0
let totalComputerPoints = 0
let playerPoints
let computerPoints
let round = 0

function playRound(){
    getPlayerChoice();
    console.log("You chose " + playChoice)
    
    getComputerChoice();
    console.log("The computer has made its choice.")
    
    console.log("The computer chose " + selectedValue);
    

    if (playChoice == "rock" && cpuChoice == "scissors"){
        console.log("Rock beats scissors. You've won this round")
        totalPlayerPoints++
        

    } else if (playChoice == "rock" && cpuChoice == "paper"){
        console.log("Paper beats scissors. You lose this round")
        totalComputerPoints++
    
    } else if (playChoice == "rock" && cpuChoice == "rock"){
        console.log("You both chose rock. Its a tie")
        
    
    } else if (playChoice == "paper" && cpuChoice == "paper"){
        console.log("You both chose paper. Its a tie")
        
    
    } else if (playChoice == "paper" && cpuChoice == "rock"){
        console.log("Paper beats rock. You've won this round")
        totalPlayerPoints++
    
    } else if (playChoice == "paper" && cpuChoice == "scissors"){
        console.log("Scissors beats paper. You lose this round")
        totalComputerPoints++
    
    } else if (playChoice == "scissors" && cpuChoice == "rock"){
        console.log("Rock beats scissors. You lose this round")
       totalComputerPoints++
    
    } else if (playChoice == "scissors" && cpuChoice == "scissors"){
        console.log("You both chose scissors. Its a tie")
       
    
    } else {
        console.log("Scissors beats paper. You've won this round")
        totalPlayerPoints++
    } 
    
    //console.log("You have " + totalPlayerPoints + " points")
    
}

function game(){

    for(round = 0; round < 5; round++) {
        playRound();
    }
    //console.log("The computer has " + computerPoints + " points")

    if (totalPlayerPoints > totalComputerPoints){
        console.log("You win!")
    }
    else if (totalPlayerPoints < totalComputerPoints){
        console.log("You lose.")
    }
    else {
        console.log("its a tie!")
    }
    console.log("You had: " + totalPlayerPoints + "points")
    console.log("The computer had: " + totalComputerPoints + "points")

}


