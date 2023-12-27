
// declare global variables
let player_choice = ""
let player_score = 0;
let cpu_score = 0;
let winner = "";
let result_text = "";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let random = getRandomInt(3);
    let choice = "";

    switch (random) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            console.log("Unknown random error");
            break;
    }

    return choice;
}

function getPlayerSelection(id) {
    player_choice = id;
    playRound();
    checkGameOver();

    // update score and result text
    document.getElementById("player-score").value = player_score;
    document.getElementById("cpu-score").value = cpu_score;
    document.getElementById("result").value = result_text;

    return;
}

function playRound() {
    let player = player_choice;
    let cpu = getComputerChoice();

    // calculate winner
    if (cpu == "rock") {
        if (player == "rock") {
            winner = "draw";
            result_text = "Draw! Try again.";
            return;
        }
        if (player == "paper") {
            winner = "player";
            ++player_score;
            result_text = "Paper beats rock! You win this round.";
            return;
        }
        if (player == "scissors") {
            winner = "computer";
            ++cpu_score;
            result_text = "Rock beats scissors! Got you that time.";
            return;
        }
    }

    if (cpu == "paper") {
        if (player == "rock") {
            winner = "computer";
            ++cpu_score;
            result_text = "Paper beats rock! Got you that time.";
            return;
        }
        if (player == "paper") {
            winner = "draw";
            result_text = "Draw! Try again.";
            return;
        }
        if (player == "scissors") {
            winner = "player";
            ++player_score;
            result_text = "Scissors beats paper! You win this round.";
            return;
        }
    }

    if (cpu == "scissors") {
        if (player == "rock") {
            winner = "player";
            ++player_score;
            result_text = "Rock beats scissors! You win this round.";
            return;
        }
        if (player == "paper") {
            winner = "computer";
            ++cpu_score;
            result_text = "Scissors beats paper! Got you that time.";
            return;
        }
        if (player == "scissors") {
            winner = "draw";
            result_text = "Draw! Try again.";
            return;
        }
    }
}

function checkGameOver() {
    if (player_score === 5) {
        result_text = "You win! I'll get you next time...";
        disableButtons();
    }
    if (cpu_score === 5) {
        result_text = "I win! Try again?";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

