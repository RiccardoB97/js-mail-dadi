// Generates a random number for the player
var playerNumber = Math.floor(Math.random() * 6) + 1;

// Generates a random number for the computer
var computerNumber = Math.floor(Math.random() * 6) + 1;

if (playerNumber > computerNumber) {
    alert("You won!");
} else if (computerNumber > playerNumber) {
    alert("The computer won!");
} else {
    alert("You had the same score. It's a draw!");
}

