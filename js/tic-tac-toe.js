console.log('test', $.fn.jquery);

const placeInput = function (event) {
    const squareDiv = event.target;
    $(squareDiv).html('x');
}

$(document).ready( function () {

    $('.square').on('click', function (event) {
        placeInput(event);
    })
});