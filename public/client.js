/*
Enhancement:
- Be able to string operations together. Currently only one operation per computation
*/

var firstNumber = '';
var secondNumber = '';
var operator;
var operatorClicked = false;
var operatorToDisplay;
var firstNumberDecimalClicked = false;
var secondNumberDecimalClicked = false;

$(document).ready(function () {
    // Event listeners
    $('#calculator').on('click', '.calc-button', getValuesAndOperation);
    $('#equals').on('click', submitCalculation);
    $('#clear').on('click', clearCalculator);

});

// Get number values and operation from user
function getValuesAndOperation() {

    // If button clicked is a number or decimal
    if ($(this).attr('data-value')) {
        var valueClicked = $(this).data().value;
        if (operatorClicked === false) {
            // Set first number of operation
            if (firstNumberDecimalClicked === false || (firstNumberDecimalClicked === true && valueClicked !== '.')) {
                firstNumber += valueClicked;
            }
            if (valueClicked === '.') {
                firstNumberDecimalClicked = true;
            }
            console.log('first number is ' + firstNumber);
            $('#output').text(firstNumber);
        } else if (operatorClicked == true) {
            // Set second number of operation
            if (secondNumberDecimalClicked === false || (secondNumberDecimalClicked === true && valueClicked !== '.')) {
                secondNumber += valueClicked;
            }
            if (valueClicked === '.') {
                secondNumberDecimalClicked = true;
            }
            console.log('second number is ' + secondNumber);
            $('#output').text(firstNumber + ' ' + operatorToDisplay + ' ' + secondNumber);
        }
    }

    // If button cliked is an operation
    if ($(this).attr('data-operator') && operatorClicked == false && firstNumber.length !== 0) {
        operatorClicked = true;
        operator = $(this).data().operator;
        operatorToDisplay = $(this).html();
        console.log('operator is: ' + operator);
        $('#output').text(firstNumber + ' ' + operatorToDisplay);
    }
}

// POST calculation to the server
function submitCalculation() {
    if (firstNumber.length !== 0 && secondNumber.length !== 0) {
        $.ajax({
            method: 'POST',
            url: '/calculation',
            data: {
                numberOneValue: firstNumber,
                numberTwoValue: secondNumber,
                operation: operator
            },
            success: function (response) {
                console.log(response);
                getCalculation();
                firstNumber = '';
                secondNumber = '';
                operator = '';
                operatorClicked = false;
                firstNumberDecimalClicked = false;
                secondNumberDecimalClicked = false;
            }
        });
    }
}

// GET the final calculation logic from the server
function getCalculation() {
    $.ajax({
        method: 'GET',
        url: '/calculationResult',
        success: function (response) {
            console.log(response);
            $('#output').text("Computing . . .");
            setTimeout(function () {
                $('#output').text('Result: ' + response.result);
            }, 3000);
        }
    });
}

// Clear calculator function
function clearCalculator() {
    $('#output').html('0');
    firstNumber = '';
    secondNumber = '';
    operator = '';
    operatorClicked = false;
    firstNumberDecimalClicked = false;
    secondNumberDecimalClicked = false;
}