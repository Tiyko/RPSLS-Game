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

    // variable that stores the game result
    let gameResult = '';

    // else if statements that compare the user's choice against the computer's choice
    // and displays conclusion to the DOM
    if (conclusion[user][com] == 1) {
        // ads the comparison result to ID versus
        document.getElementById('versus').innerText = 'WON ' + originalVersusText;
        gameResult = 'WON';
    } else if (conclusion[user][com] == 2) {
        // ads the comparison result to ID versus
        document.getElementById('versus').innerText = 'LOST ' + originalVersusText;
        gameResult = 'LOST';
    } else {
        // ads the comparison result to ID versus
        document.getElementById('versus').innerText = 'TIED ' + originalVersusText;
        gameResult = 'TIED';
    }

    // variables that store and write user and computer choice to the DOM
    let userPick = document.getElementById('challenger-one');
    userPick.innerText = choices[user];
    let comPick = document.getElementById('challenger-two');
    comPick.innerText = choices[com];

    // called function to display the score
    gameScore(gameResult);
}

/**
 * function that keeps track of score
 */
function gameScore(gameResult) {

    // else if statements that compares the stored result in the runGame function
    // and displays the result to the DOM
    if (gameResult === 'WON') {

        // increases user wins score by one to ID user-wins
        let oldscore = parseInt(document.getElementById("user-wins").innerText);
        document.getElementById("user-wins").innerText = ++oldscore;

        // variable that changes background color
        let wins = [...document.querySelectorAll("#versus, #user-wins")];
        wins.map(element => element.style.backgroundColor = 'green');

    } else if (gameResult === 'LOST') {

        // increases computer wins score by one to ID com-wins
        let oldscore = parseInt(document.getElementById("com-wins").innerText);
        document.getElementById("com-wins").innerText = ++oldscore;

        // variable that changes background color
        let loss = [...document.querySelectorAll("#versus, #com-wins")];
        loss.map(element => element.style.backgroundColor = 'red');

    } else {
        // increases ties score by one to ID ties
        let oldscore = parseInt(document.getElementById("ties").innerText);
        document.getElementById("ties").innerText = ++oldscore;

        // variable that changes background color
        let ties = [...document.querySelectorAll("#versus, #ties")];
        ties.map(element => element.style.backgroundColor = 'rosybrown');
    }

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
