const btn = document.querySelectorAll("#btn").forEach(item => {
    item.addEventListener('click', playRound(item.id));   
});
