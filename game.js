// Initial current winnings
let currentWinnings = 50;
const targetNumber = Math.floor(Math.random() * 41) + 20; // Target number between 20 and 60

// Function to play the die game
function playDieGame() {
    // Generate a random number between 1 and 6
    const dieRoll = Math.floor(Math.random() * 6) + 1;
    let winText = "";

    // Set the winning text based on the die roll
    switch (dieRoll) {
        case 1:
            winText = "It is good to be number 1! You doubled your winnings!";
            currentWinnings *= 2;
            break;
        case 2:
            winText = "Second best is not good enough. You lose all your winnings!";
            currentWinnings = 0;
            break;
        case 3:
            winText = "Three is not lucky... but not bad either. Roll again.";
            break;
        case 4:
            winText = "Four is lucky like a four-leafed clover. You won 40 points!";
            currentWinnings += 40;
            break;
        case 5:
            winText = "Five Alive. You are still in the game, but there is no change in your winnings.";
            break;
        case 6:
            // Prompt user for a number between 1 and 100
            const userNumber = parseInt(prompt("Pick a number between 1 and 100:"), 10);

            // Determine the outcome based on the user's number
            if (userNumber === targetNumber) {
                winText = "You are lucky indeed! You just multiplied your winnings by your chosen number!";
                currentWinnings *= userNumber;
            } else if (userNumber > 60) {
                winText = "You picked a rather high number. You lose those points.";
                currentWinnings -= userNumber;
            } else if (userNumber < 20) {
                winText = "You went low, eh? Well, no worries. I'll give you those points.";
                currentWinnings += userNumber;
            } else {
                winText = "Good choice - but not what I was hoping for.";
                currentWinnings -= 10;
            }
            break;
        default:
            winText = "Something went wrong!";
    }

    // Update the paragraphs
    document.getElementById("currentWinnings").textContent = "Current Winnings: " + currentWinnings;
    document.getElementById("winText").textContent = "You rolled a " + dieRoll + "! " + winText;
    document.getElementById("updatedWinnings").textContent = "Updated Winnings: " + currentWinnings;
}
