function playGame(){

let humanScore = 0
    , computerScore = 0;
let result = ""


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)+1;
    computerChoiceName = ""
    if(computerChoice === 1){
        return "rock"
    }else if(computerChoice === 2){
        return "paper"
    }else if(computerChoice === 3){
        return "scissors"
    }

}



function getHumanChoice(){
    let humanChoice = prompt("Enter rock, paper, or scissors:")
    return humanChoice.toLowerCase()
}


function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        result = "it's a tie"
    }else if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
        result = "human wins"
        humanScore++
    }else if(humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock"){
        result = "computer wins"
        computerScore++
    }else{
        result = "Invalid"
    }

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(result);
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

for(let i = 0 ; i < 5;i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
}

if(humanScore>computerScore){
    console.log("you win")
}else if(computerScore > humanScore){
    console.log("Computer wins! You Suck")
}else{
    console.log("it's a tie GAME ENDS")
}

}

playGame()