function playGame(){

let humanChoiceName;
let computerChoiceName;
let result = ""


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)+1;
    computerChoiceName = ""
    if(computerChoice === 1){
        computerChoiceName = "rock"
    }else if(computerChoice === 2){
        computerChoiceName = "paper"
    }else if(computerChoice === 3){
        computerChoiceName = "scissors"
    }

    return `Computer Chooses: ${computerChoiceName}`
}

console.log(getComputerChoice())

function getHumanChoice(){
    let humanChoice = prompt()
    humanChoiceName = humanChoice.toLowerCase()
    return `you Choose : ${humanChoiceName}`
}

console.log(getHumanChoice())



let humanScore = 0
    , computerScore = 0;

function playRound(humanChoiceName, computerChoiceName){
    if(humanChoiceName === "rock" && computerChoiceName === "rock" || humanChoiceName === "paper" && computerChoiceName === "paper" || humanChoiceName === "scissors" && computerChoiceName === "scissors"){
        result = "it's a tie"
    }else if(humanChoiceName === "rock" && computerChoiceName === "scissors" || humanChoiceName === "paper" && computerChoiceName === "rock" || humanChoiceName === "scissors" && computerChoiceName === "paper"){
        result = "human wins"
        humanScore++
    }else if(humanChoiceName === "rock" && computerChoiceName === "paper" || humanChoiceName === "paper" && computerChoiceName === "scissors" || humanChoiceName === "scissors" && computerChoiceName === "rock"){
        result = "computer wins"
        computerScore++
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



}