let currentTurn = "PLAYER1";
let turnCounter = 0; //currently no functionality

const resetGame = function () {
    $('.square').html('');
    turnCounter = 0;
}

const placeInput = function (event) {
    const squareDiv = event.target;
    console.log(squareDiv);

    if (currentTurn === "PLAYER1") {
        if ($(squareDiv).html() != 'x' && $(squareDiv).html() != 'o') {
            $(squareDiv).html('x');
            currentTurn = "PLAYER2"; //can be changed to AI if playing against AI
            turnCounter++;
        }
        return;
    }

    else if (currentTurn === "PLAYER2") {
        if ($(squareDiv).html() != 'x' && $(squareDiv).html() != 'o') {
            $(squareDiv).html('o');
            currentTurn = "PLAYER1";
            turnCounter++;

        }
    }

    else if (currentTurn === "AI") {
        $(squareDiv).html('o');
        currentTurn = "PLAYER1";
        turnCounter++;
    }
}

const checkResult = function () {
    //player 1 win
    //left to right
    if ($('#top-left').html() === 'x' && $('#top-middle').html() === 'x' && $('#top-right').html() === 'x') {
        alert("P1 Wins");
    }
    if ($('#middle-left').html() === 'x' && $('#middle-middle').html() === 'x' && $('#middle-right').html() === 'x') {
        alert("P1 Wins");
    }
    if ($('#bottom-left').html() === 'x' && $('#bottom-middle').html() === 'x' && $('#bottom-right').html() === 'x') {
        alert("P1 Wins");
    }

    //top to bottom
    if ($('#top-left').html() === 'x' && $('#middle-left').html() === 'x' && $('#bottom-left').html() === 'x') {
        alert("P1 Wins");
    }
    if ($('#top-middle').html() === 'x' && $('#middle-middle').html() === 'x' && $('#bottom-middle').html() === 'x') {
        alert("P1 Wins");
    }
    if ($('#top-right').html() === 'x' && $('#middle-right').html() === 'x' && $('#bottom-right').html() === 'x') {
        alert("P1 Wins");
    }

    //diagonal
    if ($('#top-left').html() === 'x' && $('#middle-middle').html() === 'x' && $('#bottom-right').html() === 'x') {
        alert("P1 Wins");
    }
    if ($('#top-right').html() === 'x' && $('#middle-middle').html() === 'x' && $('#bottom-left').html() === 'x') {
        alert("P1 Wins");
    }

    //player 2 win
    //left to right
    if ($('#top-left').html() === 'o' && $('#top-middle').html() === 'o' && $('#top-right').html() === 'o') {
        alert("P2 Wins");
    }
    if ($('#middle-left').html() === 'o' && $('#middle-middle').html() === 'o' && $('#middle-right').html() === 'o') {
        alert("P2 Wins");
    }
    if ($('#bottom-left').html() === 'o' && $('#bottom-middle').html() === 'o' && $('#bottom-right').html() === 'o') {
        alert("P2 Wins");
    }

    //top to bottom
    if ($('#top-left').html() === 'o' && $('#middle-left').html() === 'o' && $('#bottom-left').html() === 'o') {
        alert("P2 Wins");
    }
    if ($('#top-middle').html() === 'o' && $('#middle-middle').html() === 'o' && $('#bottom-middle').html() === 'o') {
        alert("P2 Wins");
    }
    if ($('#top-right').html() === 'o' && $('#middle-right').html() === 'o' && $('#bottom-right').html() === 'o') {
        alert("P2 Wins");
    }

    //diagonal
    if ($('#top-left').html() === 'o' && $('#middle-middle').html() === 'o' && $('#bottom-right').html() === 'o') {
        alert("P2 Wins");
    }
    if ($('#top-right').html() === 'o' && $('#middle-middle').html() === 'o' && $('#bottom-left').html() === 'o') {
        alert("P2 Wins");
    }
}

$(document).ready( function () {

    $('.square').on('click', function (event) {
        placeInput(event);
        checkResult();
    });

    $('#reset').on('click', resetGame);
});