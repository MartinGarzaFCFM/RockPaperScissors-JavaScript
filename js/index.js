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
    currState.innerText = result;
}


function game() {

    if (cpuPoints[0] < 5 && playerPoints[0] < 5) {
        let playerSelection = this.innerText;
        playerSelection = playerSelection.toLowerCase();
    
        play(playerSelection, computerPlay(), playerPoints, cpuPoints);
    
        if (playerPoints > cpuPoints) {
            //console.log("You win with " + playerPoints[0] + " against " + cpuPoints[0] + ".");
            //currState.innerText = `You win with ${playerPoints[0]} against ${cpuPoints[0]}.`;
            playerCounter.innerText = playerPoints[0];
            cpuCounter.innerText = cpuPoints[0];
        }
        else if (playerPoints < cpuPoints) {
            //console.log("You lose with " + playerPoints[0] + " against " + cpuPoints[0] + ".");
            //currState.innerText = `You lose with ${playerPoints[0]} against ${cpuPoints[0]}.`;
            playerCounter.innerText = playerPoints[0];
            cpuCounter.innerText = cpuPoints[0];
        }
        else {
            //console.log("It's a draw with " + playerPoints[0] + " against " + cpuPoints[0] + ".");
            //currState.innerText = `It's a draw with ${playerPoints[0]} against ${cpuPoints[0]}.`;
            playerCounter.innerText = playerPoints[0];
            cpuCounter.innerText = cpuPoints[0];
        }
    
        if (playerPoints[0] === 5 || cpuPoints[0] === 5) {
    
            if (playerPoints[0] === 5) {
                currState.style.color = "yellow";
                currState.innerText = `You have won with ${playerPoints[0]} against ${cpuPoints[0]}.`;
            }
            else if (cpuPoints[0] === 5) {
                currState.style.color = "red";
                currState.innerText = `You have lost with ${playerPoints[0]} against ${cpuPoints[0]}.`;
            }
        }
    }
}

function logText(e){
    console.log(this.innerText);
}

// Take the button elements
const rock = document.querySelector('#btn-rock');
const paper = document.querySelector('#btn-paper');
const scissors = document.querySelector('#btn-scissors');

//take the text elements
const currState = document.querySelector('#currState');
const playerCounter =  document.querySelector('.playerCounter');
const cpuCounter = document.querySelector('.cpuCounter');

//player and cpu points
const cpuPoints = [0];
const playerPoints = [0];


    rock.addEventListener('click', game);
    paper.addEventListener('click', game);
    scissors.addEventListener('click', game);


