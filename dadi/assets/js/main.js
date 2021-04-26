// Generates a random number for the player
var playerNumber = Math.floor(Math.random() * 6) + 1;

// Generates a random number for the computer
var computerNumber = Math.floor(Math.random() * 6) + 1;

var message = document.getElementById("final_score")

document.getElementById("player_number").innerHTML = playerNumber
document.getElementById("computer_number").innerHTML = computerNumber

if (playerNumber > computerNumber) {
    message.innerHTML = "Congrats, you won!";
} else if (computerNumber > playerNumber) {
    message.innerHTML = "Ooops, the computer won!";
} else {
    message.innerHTML = "You had the same score. It's a draw!";
}

