// Game Variables
let gameState = 'READY';
let gameCurrentTurn = 'PLAYER1';
let gameOpponest = 'PLAYER2';
let gameTurnCounter = 0; //currently no functionality
let gameMessage = '';
let gameGrid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Clears the grid by looping through each element, setting the value.
const initialiseGrid = function () {
    for (let i = 0; i < gameGrid.length; i++) {
        for (let j = 0; j < gameGrid[i].length; j++) {
            gameGrid[i][j] = '';
        }
    }

    // Changes gameState to play in the case gameState-END was achieved, also update message
    gameState = 'READY';
    gameMessage = 'Decide who PLAYER 1 will be and click on a field to make a decision and start the game.';
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

// Checks the game grid for winning combinations
const checkWin = function () {
    
    // *** UNDER CONSTRUCTION ***
    for (let i = 0; i <= gameGrid.length; i++) { 
        
    }

    if (gameTurnCounter === 9 && gameState === 'READY') {
        gameMessage = 'Game ended in a draw.';
        gameState = 'END';
    }

    // Player 1 Left to right
    if (gameGrid[0][0] === 'x' && gameGrid[0][1] === 'x' && gameGrid[0][2] === 'x') {
        gameMessage = 'P1 Wins';
        gameState = 'END'
    }
    if (gameGrid[1][0] === 'x' && gameGrid[1][1] === 'x' && gameGrid[1][2] === 'x') {
        gameMessage = 'P1 Wins';
        gameState = 'END'
    }
    if (gameGrid[2][0] === 'x' && gameGrid[2][1] === 'x' && gameGrid[2][2] === 'x') {
        gameMessage = 'P1 Wins';
        gameState = 'END'
    }

    // Player 1 Top to bottom
    if (gameGrid[0][0] === 'x' && gameGrid[1][0] === 'x' && gameGrid[2][0] === 'x') {
        gameMessage = 'P1 Wins';
        gameState = 'END';
    }
    if (gameGrid[0][1] === 'x' && gameGrid[1][1] === 'x' && gameGrid[2][1] === 'x') {
        gameMessage = 'P1 Wins';
        gameState = 'END';
    }
    if (gameGrid[0][2] === 'x' && gameGrid[1][2] === 'x' && gameGrid[2][2] === 'x') {
        gameMessage = 'P1 Wins';
        gameState = 'END';
    }

    // Player 1 Diagonals
    if (gameGrid[0][0] === 'x' && gameGrid[1][1] === 'x' && gameGrid[2][2] === 'x') {
        gameMessage = 'P1 Wins';
        gameState = 'END';
    }
    if (gameGrid[0][2] === 'x' && gameGrid[1][1] === 'x' && gameGrid[2][0] === 'x') {
        gameMessage = 'P1 Wins';
        gameState = 'END';
    }

    // Player 2 Left to right
    if (gameGrid[0][0] === 'o' && gameGrid[0][1] === 'o' && gameGrid[0][2] === 'o') {
        gameMessage = 'P2 Wins';
        gameState = 'END';
    }
    if (gameGrid[1][0] === 'o' && gameGrid[1][1] === 'o' && gameGrid[1][2] === 'o') {
        gameMessage = 'P2 Wins';
        gameState = 'END';
    }
    if (gameGrid[2][0] === 'o' && gameGrid[2][1] === 'o' && gameGrid[2][2] === 'o') {
        gameMessage = 'P2 Wins';
        gameState = 'END';
    }

    // Player 2 Top to bottom
    if (gameGrid[0][0] === 'o' && gameGrid[1][0] === 'o' && gameGrid[2][0] === 'o') {
        gameMessage = 'P2 Wins';
        gameState = 'END';
    }
    if (gameGrid[0][1] === 'o' && gameGrid[1][1] === 'o' && gameGrid[2][1] === 'o') {
        gameMessage = 'P2 Wins';
        gameState = 'END';
    }
    if (gameGrid[0][2] === 'o' && gameGrid[1][2] === 'o' && gameGrid[2][2] === 'o') {
        gameMessage = 'P2 Wins';
        gameState = 'END';
    }

    // Player 2 Diagonals
    if (gameGrid[0][0] === 'o' && gameGrid[1][1] === 'o' && gameGrid[2][2] === 'o') {
        gameMessage = 'P2 Wins';
        gameState = 'END';
    }
    if (gameGrid[0][2] === 'o' && gameGrid[1][1] === 'o' && gameGrid[2][0] === 'o') {
        gameMessage = 'P2 Wins';
        gameState = 'END';
    }
};