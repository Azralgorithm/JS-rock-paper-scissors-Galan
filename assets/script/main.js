let playerOutput = document.querySelector("#playerOutput");
let computerOutput = document.querySelector("#computerOutput");
let resultOutput = document.querySelector("#resultOutput");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");
let numTurn = document.querySelector("#numTurn");
let clrBtn = document.querySelector("#clrBtn");

// match history
let choices = ["ROCK", "PAPER", "SCISSORS"]
let index = Math.round(Math.random() * 2);
let player = 0;
let computer = 0;
let turn = 0;

// event listeners
rockBtn.addEventListener("click", rockCmd);
paperBtn.addEventListener("click",paperCmd);
scissorsBtn.addEventListener("click", scissorsCmd);
clrBtn.addEventListener("click", allClear);

// functions
function rockCmd() {
    let choices = ["ROCK", "PAPER", "SCISSORS"]
    let index = Math.round(Math.random() * 2);
    let choicesPicker = choices[index];

    if (choicesPicker == "ROCK") {
        playerOutput.innerHTML = "ROCK";
        computerOutput.innerHTML = choicesPicker;
        resultOutput.innerHTML = "TIE";
        resultOutput.style.color = "White";
        turn++;
        numTurn.innerHTML = turn;
    } else if (choicesPicker == "PAPER") {
        playerOutput.innerHTML = "ROCK";
        computerOutput.innerHTML = choicesPicker;
        resultOutput.innerHTML = "YOU LOSE";
        resultOutput.style.color = "red";
        computer++;
        computerScore.innerHTML = computer;
        turn++;
        numTurn.innerHTML = turn;
    } else if (choicesPicker == "SCISSORS") {
        playerOutput.innerHTML = "ROCK";
        computerOutput.innerHTML = choicesPicker;
        resultOutput.innerHTML = "YOU WIN";
        resultOutput.style.color = "lightgreen";
        player++;
        playerScore.innerHTML = player;
        turn++;
        numTurn.innerHTML = turn;
    }
}
function paperCmd() {
    let choices = ["ROCK", "PAPER", "SCISSORS"]
    let index = Math.round(Math.random() * 2);
    let choicesPicker = choices[index];

    if (choicesPicker == "PAPER") {
        playerOutput.innerHTML = "PAPER";
        computerOutput.innerHTML = choicesPicker;
        resultOutput.innerHTML = "TIE";
        resultOutput.style.color = "White";
        turn++;
        numTurn.innerHTML = turn;
    } else if (choicesPicker == "SCISSOR") {
        playerOutput.innerHTML = "PAPER";
        computerOutput.innerHTML = choicesPicker;
        resultOutput.innerHTML = "YOU LOSE";
        resultOutput.style.color = "red";
        computer++;
        computerScore.innerHTML = computer;
        turn++;
        numTurn.innerHTML = turn;
    } else if (choicesPicker == "ROCK") {
        playerOutput.innerHTML = "PAPER";
        computerOutput.innerHTML = choicesPicker;
        resultOutput.innerHTML = "YOU WIN";
        resultOutput.style.color = "lightgreen";
        player++;
        playerScore.innerHTML = player;
        turn++;
        numTurn.innerHTML = turn;
    }
}
function scissorsCmd() {
    let choices = ["ROCK", "PAPER", "SCISSORS"]
    let index = Math.round(Math.random() * 2);
    let choicesPicker = choices[index];

    if (choicesPicker == "SCISSORS") {
        playerOutput.innerHTML = "SCISSORS";
        computerOutput.innerHTML = choicesPicker;
        resultOutput.innerHTML = "TIE";
        resultOutput.style.color = "White";
        turn++;
        numTurn.innerHTML = turn;
    } else if (choicesPicker == "ROCK") {
        playerOutput.innerHTML = "SCISSORS";
        computerOutput.innerHTML = choicesPicker;
        resultOutput.innerHTML = "YOU LOSE";
        resultOutput.style.color = "red";
        computer++;
        computerScore.innerHTML = computer;
        turn++;
        numTurn.innerHTML = turn;
    } else if (choicesPicker == "PAPER") {
        playerOutput.innerHTML = "SCISSORS";
        computerOutput.innerHTML = choicesPicker;
        resultOutput.innerHTML = "YOU WIN";
        resultOutput.style.color = "lightgreen";
        player++;
        playerScore.innerHTML = player;
        turn++;
        numTurn.innerHTML = turn;
    }
}

function allClear() {
    playerOutput.innerHTML = "";
    computerOutput.innerHTML = "";
    resultOutput.innerHTML = "";
    playerScore.innerHTML = "0";
    computerScore.innerHTML = "0";
    numTurn.innerHTML = "";
    
}

