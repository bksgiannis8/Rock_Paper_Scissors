function getComputerChoice() {
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];
    let pcChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return pcChoice
}

const btn = document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
    }
}