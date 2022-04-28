/**
 * variables with arrays that contain the game
 * choices array and the matrice array
 */
let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let conclusion = [
    [0, 2, 1, 1, 2],
    [1, 0, 2, 2, 1],
    [2, 1, 0, 1, 2],
    [2, 1, 2, 0, 1],
    [1, 2, 1, 2, 0]
];

// variable that stores the initial result text, to be added to the result when game is played.
let originalVersusText = document.getElementById('versus').innerText;

/**
 * Function that runs the game
 */
function runGame(user) {

    // variable that calculates a random number up to 5 to represent the computer's choice
    let com = Math.floor(Math.random() * 5);

    // else if statements that compare the user's choice against the computer's choice
    // and displays conclusion to the DOM
    if (conclusion[user][com] == 1) {
        // ads the comparison result to ID versus
        document.getElementById('versus').innerText = 'WON ' + originalVersusText;
    } else if (conclusion[user][com] == 2) {
        // ads the comparison result to ID versus
        document.getElementById('versus').innerText = 'LOST ' + originalVersusText;
    } else {
        // ads the comparison result to ID versus
        document.getElementById('versus').innerText = 'TIED ' + originalVersusText;
    }

    // variables that store and write user and computer choice to the DOM
    let userPick = document.getElementById('challenger-one');
    userPick.innerText = choices[user];
    let comPick = document.getElementById('challenger-two');
    comPick.innerText = choices[com];

}

/**
 * function that keeps track of score
 */
function gameScore(gameResult) {

}

/**
 * switch function that changes game challengers background color
 */
function challengerColors(userPick) {

}

/**
 * function that displays end game message
 */
function endGameMessage(result) {

}

/**
 * function that resets the score at 10 
 */
function gameOver(oldscore) {

}

/**
 * function that hides the game-over element on click
 */
function playAgain() {

}
