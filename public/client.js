$(document).ready(function () {

    // Set the operator selected
    var operator;

    $('#selectOperation').on('click', '.operator', function () {
        $('.operator').removeClass('active-operator');

        if ($(this)[0].id === 'add') {
            operator = 'add';
            $(this).addClass('active-operator');
        } else if ($(this)[0].id === 'subtract') {
            operator = 'subtract';
            $(this).addClass('active-operator');
        } else if ($(this)[0].id === 'multiply') {
            operator = 'multiply';
            $(this).addClass('active-operator');
        } else if ($(this)[0].id === 'divide') {
            operator = 'divide';
            $(this).addClass('active-operator');
        }
    });

    // POST the calculation elements to the server
    $('#submitCalculationButton').on('click', function(){
        var x = $('#numberOne').val();
        var y = $('#numberTwo').val();
        
        $.ajax({
            method: 'POST',
            url: '/calculation',
            data: {
                numberOneValue: x,
                numberTwoValue: y,
                operation: operator
            },
            success: function (response) {
                console.log(response);
                getCalculation();
            }
        })
    });

    $('#clearButton').on('click', function(){
        $('#numberOne').val('');
        $('#numberTwo').val('');
        $('.operator').removeClass('active-operator');
        $('#result').html('');
    });
});

// GET the final calucation logic from the server
function getCalculation() {
    $.ajax({
        method: 'GET',
        url: '/compute',
        success: function (response) {
            console.log(response);
            $('#result').html(response.result);
        }
    });
}