// Game Variables
const gameWinMessages = ['Player 1 Wins!', 'Player 2 Wins!'];

let gameState = 'READY';
let gameCurrentTurn = 'PLAYER1';
let gameOpponest = 'PLAYER2';
let gameTurnCounter = 0;
let gameMessage = '';
let gameGrid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Returns number of elements in the grid (assumes the grid is a square)
const getTotalElements = function () {
    return gameGrid.length * gameGrid[0].length;
}

// Clears the grid and sets all game variables to beginning values
const initialiseGrid = function () {

    // Clears the grid by looping through each element, setting the value to nothing.
    for (let i = 0; i < gameGrid.length; i++) {
        for (let j = 0; j < gameGrid[i].length; j++) {
            gameGrid[i][j] = '';
        }
    }

    // Reset all game variables
    gameState = 'READY';
    gameCurrentTurn = 'PLAYER1';
    gameMessage = 'Decide who PLAYER 1 will be and click on a field to make a decision and start the game.';
    gameTurnCounter = 0;
};

// Updates gameGrid nested array with input based on current turn, the ID of the clicked button is parsed in (which refers to it's relevant array position)
const gameInput = function (gridLocation) {
    const row = gridLocation[0];
    const col = gridLocation[2];

    // If array element is empty and game is active
    if (!gameGrid[row][col] && gameState === 'READY') {
        if (gameCurrentTurn === 'PLAYER1') {
            gameGrid[row][col] = 'x';
            gameCurrentTurn = 'PLAYER2';
            gameMessage = 'PLAYER 2, you know what to do!';
            gameTurnCounter++;
        } else {
            gameGrid[row][col] = 'o';
            gameCurrentTurn = 'PLAYER1';
            gameMessage = 'PLAYER 1, have some fun!';
            gameTurnCounter++;
        }
    }

    checkWin();
};

// Check row matches - currently dynamic
const checkRows = function (char) {

    // Loop through rows
    for (let row = 0; row < gameGrid.length; row++) { 

        // Variable to keep track of all matches in the current row
        let matchingElementsInRow = 0;

        // Check row matches
        for (let col = 0; col < gameGrid[row].length; col++) {
            if (gameGrid[row][col] === char) {
                matchingElementsInRow++;
            }
        }

        // Return true if there was matching elements along the whole row
        if (matchingElementsInRow === gameGrid[row].length) {
            return true;
        }
    }

    return false;
}

// Check column matches - currently dynamic
const checkColumns = function (char) {

    // Loop through columns
    for (let col = 0; col < gameGrid.length; col++) {

        // Variable to keep track of matches
        let matchingElementsInCol = 0;

        // Loop through each row of each column
        for (let row = 0; row < gameGrid.length; row++) { 

            // Check column matches
            if (gameGrid[row][col] === char) {
                matchingElementsInCol++;
            }

            // Return true if there was matching elements down the column
            if (matchingElementsInCol === gameGrid.length) {
                return true;
            }
        }
    }

    return false;
}

// Check diagonals matches - currently dynamic
const checkDiagonals = function (char) {

    // Variables for diagonal/reverse diagonal matches
    let diagonalIterator = 0;
    let diagonalReverseIterator = gameGrid.length - 1;
    let matchingElementsDiagonal = 0;
    let matchingElementsReverseDiagonal = 0;

    // Loop through rows
    for (let row = 0; row < gameGrid.length; row++) { 

        // Handle forward diagonal matches
        if (gameGrid[row][diagonalIterator] === char) {
            matchingElementsDiagonal++;
        }

        // Handle reverse diagonal matches
        if (gameGrid[row][diagonalReverseIterator] === char) {
            matchingElementsReverseDiagonal++;
        }

        // Adjust diagonal iterators
        diagonalIterator++;
        diagonalReverseIterator--;

        // Return true if there was matches diagonally, based on array size
        if (matchingElementsDiagonal === gameGrid.length || matchingElementsReverseDiagonal === gameGrid.length) {
            return true;
        }
    }

    return false;
}

// Checks the game grid for winning combinations, draws if none
const checkWin = function () {

    // Check matches for each player
    if (checkRows('x') || checkColumns('x') || checkDiagonals('x')) {
        gameMessage = gameWinMessages[0];
        gameState = 'END';
    } else if (checkRows('o') || checkColumns('o') || checkDiagonals('o')) {
        gameMessage = gameWinMessages[1];
        gameState = 'END';
    }

    // If no one won, draw game
    if (gameTurnCounter === getTotalElements() && gameState === 'READY') {
        gameMessage = 'Game ended in a draw.';
        gameState = 'END';
    }
};