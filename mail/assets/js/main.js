// Solution 1

// Ask user their email
var userEmail = prompt("What's your email address?")

// Message that is going to be printed
var accepted = "You have full access to this computer"
var denied = "You have been denied access to this computer"
// Check if they  can access 
switch (userEmail) {
    case "riccardo@gmail.com":
        alert(accepted)
        break;
    case "michele@gmail.com":
        alert(accepted)
        break;
    case "andrea@gmail.com":
        alert(denied)
        break;
}

// Solution 2

// Ask user their email
var userEmail = prompt("What's your email address?")

acceptedEmail = ["riccardo@gmail.com", "andrea@gmail.com", "marco@gmail.com"]

if (acceptedEmail.includes(userEmail)) {
    alert("You have access to this computer")
} else {
    alert("You have been denied access to this computer")
}