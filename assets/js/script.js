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

    // called function to display to change background colors
    challengerColors(userPick);
    challengerColors(comPick);

    // called function to display the score
    gameScore(gameResult);
}

/**
 * function that keeps track of score
 */
function gameScore(gameResult) {

    // end game message variable
    let result = '';
    // else if statements that compares the stored result in the runGame function
    // and displays the result to the DOM
    if (gameResult === 'WON') {

        // increases user wins score by one to ID user-wins
        let oldscore = parseInt(document.getElementById("user-wins").innerText);
        document.getElementById("user-wins").innerText = ++oldscore;

        // variable that changes background color
        let wins = [...document.querySelectorAll("#versus, #user-wins")];
        wins.map(element => element.style.backgroundColor = 'green');

        result = 'WON';

        // function that resets the score counting to 0
        gameOver(oldscore);
    } else if (gameResult === 'LOST') {

        // increases computer wins score by one to ID com-wins
        let oldscore = parseInt(document.getElementById("com-wins").innerText);
        document.getElementById("com-wins").innerText = ++oldscore;

        // variable that changes background color
        let loss = [...document.querySelectorAll("#versus, #com-wins")];
        loss.map(element => element.style.backgroundColor = 'red');

        result = 'LOST';

        // function that resets the score counting to 0
        gameOver(oldscore);
    } else {
        // increases ties score by one to ID ties
        let oldscore = parseInt(document.getElementById("ties").innerText);
        document.getElementById("ties").innerText = ++oldscore;

        // variable that changes background color
        let ties = [...document.querySelectorAll("#versus, #ties")];
        ties.map(element => element.style.backgroundColor = 'rosybrown');

        result = 'TIE';

        // function that resets the score counting to 0
        gameOver(oldscore);
    }

    // function called for end game message
    endGameMessage(result);
}

/**
 * switch function that changes game challengers background color
 */
function challengerColors(userPick) {

    switch (userPick.innerHTML) {
        case 'Rock':
            userPick.style.backgroundColor = 'palevioletred';
            break;
        case 'Paper':
            userPick.style.backgroundColor = 'sandybrown';
            break;
        case 'Scissors':
            userPick.style.backgroundColor = 'purple';
            break;
        case 'Lizard':
            userPick.style.backgroundColor = 'mediumseagreen';
            break;
        case 'Spock':
            userPick.style.backgroundColor = 'blue';
            break;
    }
}

/**
 * function that displays end game message
 */
function endGameMessage(result) {

    if (result === 'WON') {
        let endGameText = document.getElementById('game-over-note');
        endGameText.innerText = 'CONGRATULATION YOU WIN!';
    } else if (result === 'LOST') {
        let endGameText = document.getElementById('game-over-note');
        endGameText.innerText = 'SORRY YOU LOST!';
    } else {
        let endGameText = document.getElementById('game-over-note');
        endGameText.innerText = 'IT WAS A TIE!';
    }
}

/**
 * function that resets the score at 10 
 */
function gameOver(oldscore) {

    if (oldscore === 10) {

        // when the score reaches to 10 it will reset from 0
        let resetscore = [...document.querySelectorAll("#user-wins, #com-wins, #ties")];
        resetscore.map(element => element.innerText = 0);

        // displays the end game element
        let endGame = document.getElementById('game-over');
        endGame.style.visibility = "visible";
    }
}

/**
 * function that hides the game-over element on click
 */
function playAgain() {

    let playAgain = document.getElementById('game-over');
    playAgain.style.visibility = "hidden";
}
