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
    playerChoice = playerChoice

}
var i = 5;

function startTimer() {

    var countdownTimer = setInterval(function() {

        console.log(i);
        i = i - 1;

        if (i <= 0) {
            clearInterval(countdownTimer);
        }

    }, 1000);

}


let totalPlayerPoints = 0
let totalComputerPoints = 0
let playerPoints
let computerPoints

function playRound(){
    getPlayerChoice();
    
    getComputerChoice();
    console.log("The computer has made its choice.")
    //startTimer();
    console.log("The computer chose " + selectedValue);
    

    if (playChoice == "rock" && cpuChoice == "scissors"){
        console.log("Rock beats scissors. You've won this round")
        playerPoints = totalPlayerPoints + 3
        computerPoints = totalComputerPoints + 0

    } else if (playChoice == "rock" && cpuChoice == "paper"){
        console.log("Paper beats scissors. You lose this round")
        playerPoints = totalPlayerPoints + 0
        computerPoints = totalComputerPoints + 3
    
    } else if (playChoice == "rock" && cpuChoice == "rock"){
        console.log("You both chose rock. Its a tie")
        playerPoints = totalPlayerPoints + 1
        computerPoints = totalComputerPoints + 1
    
    } else if (playChoice == "paper" && cpuChoice == "paper"){
        console.log("You both chose paper. Its a tie")
        playerPoints = totalPlayerPoints + 1
        computerPoints = totalComputerPoints + 1
    
    } else if (playChoice == "paper" && cpuChoice == "rock"){
        console.log("Paper beats rock. You've won this round")
        playerPoints = totalPlayerPoints + 3
        computerPoints = totalComputerPoints + 0
    
    } else if (playChoice == "paper" && cpuChoice == "scissors"){
        console.log("Scissors beats paper. You lose this round")
        playerPoints = totalPlayerPoints + 0
        computerPoints = totalComputerPoints + 3
    
    } else if (playChoice == "scissors" && cpuChoice == "rock"){
        console.log("Rock beats scissors. You lose this round")
        playerPoints = totalPlayerPoints + 0
        computerPoints = totalComputerPoints + 3
    
    } else if (playChoice == "scissors" && cpuChoice == "scissors"){
        console.log("You both chose scissors. Its a tie")
        playerPoints = totalPlayerPoints + 1
        computerPoints = totalComputerPoints + 1
    
    } else if (playChoice == "scissors" && cpuChoice == "paper"){
        console.log("Scissors beats paper. You've won this round")
        playerPoints = totalPlayerPoints + 3
        computerPoints = totalComputerPoints + 0
    } 
    
    console.log("Your points: " + playerPoints)
}

