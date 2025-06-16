var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    let yourChoice = document.getElementById("your-choice")
    yourChoice.src = you + ".png";
    yourChoice.style.background = "white"

    // random for opponent
    opponent = choices[Math.floor(Math.random() * 3)]; //0 - .999999 * 3 = 0-2.99999
    let oponentChoice = document.getElementById("opponent-choice")
    oponentChoice.src = opponent + ".png";
    oponentChoice.style.background = "white"

    // check for winner
    if (you == opponent) {
        yourScore += 1; 
        opponentScore += 1;
    } else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
            } else if (opponent == "paper") {
                opponentScore += 1;
            }
        } else if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
            } else if (opponent == "rock") {
                opponentScore += 1;
            }
        } else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1
            } else if (opponent == "scissors") {
                opponentScore += 1;
            }
        }
    }
    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore
}