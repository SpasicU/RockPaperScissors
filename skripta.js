function getComputerChoice(){
    let choice;
    let random = Math.floor(Math.random() * 3);
    if(random == 0)
    {
        choice = "paper";
    }
    else if(random == 1){
        choice = "rock";
    }
    else {
        choice = "scissors";
    }

    return choice;
}

function playRound(playerChoice, computerSelection){
    //let playerChoice = document.getElementById('playerSelection').value;
    //let computerSelection = computerChoice();
    //playRound(playerChoice, computerSelection);
    
    let p = playerChoice.toLowerCase();

    if(p == "scissors")
    {
        if(computerSelection == "paper"){
            return console.log("You Win! Scissors beat Paper!");
        }
        else if(computerSelection == "rock"){
            return console.log("You Lose! Rock beats Scissors!");
        }
        else{
            return console.log("Draw! You both picked scissors!");
        }
    }
    else if(p == "rock")
    {
        if(computerSelection == "paper"){
            return console.log("You Lose! Paper beats Rock!");
        }
        else if(computerSelection == "scissors"){
            return console.log("You Win! Rock beats Scissors!");
        }
        else{
            return console.log("Draw! You both picked rock!");
        }
    }
    else if(p == "paper")
    {
        if(computerSelection == "paper"){
            return console.log("Draw! You both picked paper!");
        }
        else if(computerSelection == "scissors"){
            return console.log("You Lose! Scissors beat Paper!");
        }
        else{
            return console.log("You win! Paper beats rock!");
        }
    }
}

function game(){
    for(let i=0; i<3; i++){
        console.log("Round number: " + (i+1))
        let playerInput = prompt("Rock, Paper, Scissors?");
        let computer = getComputerChoice();
        playRound(playerInput, computer);
    }
}