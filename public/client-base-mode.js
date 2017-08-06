// Global variables
var operator;

$(document).ready(function () {
    $('#selectOperation').on('click', '.operator', selectOperator);
    $('#submitCalculationButton').on('click', submitCalculation);
    $('#clearButton').on('click', clearCalculator);
});

// Set the user's selected operation
function selectOperator() {
    $('.operator').removeClass('active-operator');

    var operatorSelected = $(this)[0].id;

    if (operatorSelected === 'add') {
        operator = 'add';
        $(this).addClass('active-operator');
    } else if (operatorSelected === 'subtract') {
        operator = 'subtract';
        $(this).addClass('active-operator');
    } else if (operatorSelected === 'multiply') {
        operator = 'multiply';
        $(this).addClass('active-operator');
    } else if (operatorSelected === 'divide') {
        operator = 'divide';
        $(this).addClass('active-operator');
    }
}

// POST the bundled calculation to the server
function submitCalculation() {
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
}

// GET the final calculation logic from the server
function getCalculation() {
    $.ajax({
        method: 'GET',
        url: '/finalComputation',
        success: function (response) {
            console.log(response);
            $('#result').html(response.result);
        }
    });
}

// Clear the calculator
function clearCalculator() {
    $('#numberOne').val('');
    $('#numberTwo').val('');
    $('.operator').removeClass('active-operator');
    $('#result').html('');
}