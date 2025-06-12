
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

    document.querySelector(".display-result").textContent = `You chose ${humanChoice} , computer chose ${computerChoice} 
    winner : ${result}`;


    document.querySelector('.display-score').textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
}

document.querySelector(".rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

document.querySelector(".paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

document.querySelector(".scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});





