let playerSelection
let computerSelection
let playerScore = 0;
let compScore = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector("#output");
output.textContent = "You have to beat the MACHINE!!!"

function getComputerChoice() {
    const rockPaperScissors = ["rock", "paper", "scissors"];
    let pcChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return pcChoice
}


const btn = document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        playGame();
        console.log(playerSelection);
        console.log(computerSelection);
    })
})

function playRound(playerSelection, computerSelection) {
    let winner
    if (playerSelection=="rock" && computerSelection=="scissors") {
        winner="Player";
    }   else if (playerSelection=="rock" && computerSelection=="paper") {
        winner="Computer";
    }   else if (playerSelection=="paper" && computerSelection=="scissors") {
        winner="Computer";
    }   else if (playerSelection=="paper" && computerSelection=="rock") {
        winner="Player";
    }   else if (playerSelection=="scissors" && computerSelection=="paper") {
        winner="Player";
    }   else if (playerSelection=="scissors" && computerSelection=="rock") {
        winner="Computer";
    }   else if (playerSelection==computerSelection) {
        alert("its a draw");
    }
    if (winner="player") {
        playerScore +=1;
    }   else if (winner="computer") {
            compScore +=1;
    }
    return winner;
}

function playGame() {
    
    while (playerScore<5 || compScore<5) {
        playRound(playerSelection, computerSelection)
    }
    let winnerOfFive 
    if (playerScore > compScore) {
        winnerOfFive = "Player"
    }   else {
        winnerOfFive = "Computer"
    }
    
    return winnerOfFive
}
