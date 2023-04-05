// Update the HTML's grid
const updateHTML = function () {

    // *** NOTE - If updateHTML gets too big, consider splitting below into separate updateHTMLGrid function ***

    // Get all divs with a class of square
    const htmlSquares = $('.square');

    // Loop through each row in the gameGrid
    for (let row = 0; row < gameGrid.length; row++) {

        // Loop through each column of each row
        for (let col = 0; col < gameGrid[row].length; col++) {

            // Select the appropriate square based on above for loop values, allows for dynamic field size (assuming more .square divs are added to compensate)
            const currentSquare = row * gameGrid[row].length + col; // I figured this out myself :raise-hands:

            // Update HTML element based on current value of gameGrid element, allows for future implementation of custom portraits/images
            if (gameGrid[row][col] === 'x') {
                $(htmlSquares[currentSquare]).html('x'); //(player1ImgElement);
            }

            if (gameGrid[row][col] === 'o') {
                $(htmlSquares[currentSquare]).html('o'); //(player2ImgElement);
            }

            if (gameGrid[row][col] === '') {
                $(htmlSquares[currentSquare]).html('');
            }
        }
    }
    // *** END OF NOTE ***
    
    // Update result elements text with game message
    $('#message').text(gameMessage);
};

// Handle user input
const handleInput = function (event) {

    //Get the square that was clicked on
    const currentSquare = event.target;

    //Parse in the .square's ID (which is a string regarding it's relevant position in the gameGrid nested array)
    gameInput($(currentSquare).attr('id'));
};

// Handle Page Display/Functionality
$(document).ready( function () {
    initialiseGrid();
    updateHTML();

    // Attach listeners to all .square divs, parsing itself into the function on click
    $('.square').on('click', function (event) {
        //placeInput(event);
        //checkResult();
        handleInput(event);
        updateHTML();
    });

    // Used to restart game
    $('#reset').on('click', function () {
        initialiseGrid();
        updateHTML();
    });
});