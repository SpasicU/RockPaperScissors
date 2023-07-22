let rezComp = 0;
let rezIgr = 0; 
let rezultat = "";

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

function disableButtons() {
    document.querySelectorAll(".buttons").forEach(e => e.disabled = true);
}

function playRound(p, computerSelection){
    
    if(p == "scissors")
    {
        if(computerSelection == "paper"){
            rezultat = "You Win! Scissors beat Paper!";
            rezIgr+=1;
        }
        else if(computerSelection == "rock"){
            rezultat = "You Lose! Rock beats Scissors!";
            rezComp+=1;
        }
        else{
            rezultat = "Draw! You both picked Scissors!";
            rezComp+=1;
        }
    }
    else if(p == "rock")
    {
        if(computerSelection == "paper"){
            rezultat = "You Lose! Paper beats Rock!";
            rezComp+=1;
        }
        else if(computerSelection == "scissors"){
            rezultat = "You Win! Rock beats Scissors!";
            rezIgr+=1;
        }
        else{
            rezultat = "Draw! You both picked rock!";
        }
    }
    else if(p == "paper")
    {
        if(computerSelection == "paper"){
            rezultat = "Draw! You both picked paper!";
        }
        else if(computerSelection == "scissors"){
            rezultat = "You Lose! Scissors beat Paper!";
            rezComp+=1;
        }
        else{
            rezultat = "You win! Paper beats rock!";
            rezIgr+=1;
        }
    }
    return rezultat;
}

function game(playerChoice) {

    let p = playerChoice.toLowerCase();
    let computerSelection = getComputerChoice();
  
    let rezultatRunde = playRound(p, computerSelection);
  
    // if (rezultatRunde.search('You Win!') > -1) {
    //     rezIgr++;
    //  } else if (rezultatRunde.search('You Lose!') > -1) {
    //     rezComp++;
    //  }

    document.getElementById("result").innerHTML = rezultatRunde;
    document.getElementById("rezIgr").innerHTML = rezIgr;
    document.getElementById("rezComp").innerHTML = rezComp;
  
    if (rezComp == 5) {
        document.getElementById("result").innerHTML = 'Computer won! Reload the page to play again.';
        disableButtons();
    }else if (rezIgr == 5) {
        document.getElementById("result").innerHTML = 'You won! Reload the page to play again.';
        disableButtons();
    }
    
  }



// function game(){
//     while(rezIgr<5 || rezComp<5) {
//         console.log("Round number: " + (i+1))
//         let playerInput = prompt("Rock, Paper, Scissors?");
//         let computer = getComputerChoice();
//         playRound(playerInput, computer);
//         document.getElementById("rezIgr").innerHTML = " " + rezIgr;
//         document.getElementById("rezComp").innerHTML = " " + rezComp;
//     }
// }