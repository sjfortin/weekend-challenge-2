/*
Todos:
- Cannot string operations together. Only one operation per computation
*/

var firstNumber = '';
var secondNumber = '';
var operator;
var operatorClicked = false;
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
        if (operatorClicked === false) {
            // Set first number of operation
            if (firstNumberDecimalClicked === false || (firstNumberDecimalClicked === true && $(this).data().value !== '.')) {
                firstNumber += $(this).data().value;
            }
            if ($(this).data().value === '.') {
                firstNumberDecimalClicked = true;
            }
            console.log('first number is ' + firstNumber);
            $('#output').text(firstNumber);
        } else if (operatorClicked == true) {
            // Set second number of operation
            if (secondNumberDecimalClicked === false || (secondNumberDecimalClicked === true && $(this).data().value !== '.')) {
                secondNumber += $(this).data().value;
            }
            if ($(this).data().value === '.') {
                secondNumberDecimalClicked = true;
            }
            console.log('second number is ' + secondNumber);
            $('#output').text(secondNumber);
        }
    }

    // If button cliked is an operation
    if ($(this).attr('data-operator') && operatorClicked == false && firstNumber.length !== 0) {
        operatorClicked = true;
        operator = $(this).data().operator;
        console.log('operator is: ' + operator);
        $('#output').text($(this).html());
    }

}

// POST calculation to the server
function submitCalculation() {


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

// GET the final calculation logic from the server
function getCalculation() {
    $.ajax({
        method: 'GET',
        url: '/calculationResult',
        success: function (response) {
            console.log(response);
            $('#output').html(response.result);
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