function computerPlay() {
    let rpc = ["rock", "paper", "scissors"];
    return rpc[Math.floor(Math.random() * rpc.length)];
}

function play(playerPlay, computerPlay, playerPoints, cpuPoints) {
    let result;
    switch (playerPlay) {
        case "rock":
            if (computerPlay === "paper") {
                result = "You lose, " + computerPlay + " beats " + playerPlay + ".";
                cpuPoints[0]++;
            }
            else if (computerPlay === "rock") {
                result = "It's a draw, Computer and you have " + playerPlay + ".";
            }
            else if (computerPlay === "scissors") {
                result = "You win, " + playerPlay + " beats " + computerPlay + ".";
                playerPoints[0]++;
            }
            break;

        case "paper":
            if (computerPlay === "scissors") {
                result = "You lose, " + computerPlay + " beats " + playerPlay + ".";
                cpuPoints[0]++;
            }
            else if (computerPlay === "paper") {
                result = "It's a draw, Computer and you have " + playerPlay + ".";
            }
            else if (computerPlay === "rock") {
                result = "You win, " + playerPlay + " beats " + computerPlay + ".";
                playerPoints[0]++;
            }
            break;

        case "scissors":
            if (computerPlay === "rock") {
                result = "You lose, " + computerPlay + " beats " + playerPlay + ".";
                cpuPoints[0]++;
            }
            else if (computerPlay === "scissors") {
                result = "It's a draw, Computer and you have " + playerPlay + ".";
            }
            else if (computerPlay === "paper") {
                result = "You win, " + playerPlay + " beats " + computerPlay + ".";
                playerPoints[0]++;
            }
            break;

        default:
            result = "Invalid, put a real option. ('Rock', 'Paper' or 'Scissors')";
            break;
    }
    console.log(result);
}


function game() {
    var cpuPoints = [0];
    var playerPoints = [0];
    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Make your move: ");
        playerSelection = playerSelection.toLowerCase();

        play(playerSelection, computerPlay(), playerPoints, cpuPoints);

    }

    if (playerPoints > cpuPoints) {
        console.log("You win with " + playerPoints[0] + " against " + cpuPoints[0] + ".");
    }
    else if (playerPoints < cpuPoints) {
        console.log("You lose with " + playerPoints[0] + " against " + cpuPoints[0] + ".");
    }
    else {
        console.log("It's a draw with " + playerPoints[0] + " against " + cpuPoints[0] + ".");
    }
}

game();