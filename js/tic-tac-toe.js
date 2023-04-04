let currentTurn = "PLAYER1";

const placeInput = function (event) {
    const squareDiv = event.target;

    if (currentTurn === "PLAYER1") {
        if ($(squareDiv).html() != 'x' && $(squareDiv).html() != 'o') {
            $(squareDiv).html('x');
            currentTurn = "PLAYER2";
        }
        return;
    }

    else if (currentTurn === "PLAYER2") {
        if ($(squareDiv).html() != 'x' && $(squareDiv).html() != 'o') {
            $(squareDiv).html('o');
            currentTurn = "PLAYER1";
        }
    }

    else if (currentTurn === "AI") {
        $(squareDiv).html('o');
        currentTurn = "PLAYER1";
    }
}

$(document).ready( function () {

    $('.square').on('click', function (event) {
        placeInput(event);
    });
});