/*
Todos:
- Can currently input more than decimal
- Cannot string operations together. Only one operation per computation


*/

var firstNumber = '';
var secondNumber = '';
var operator;
var operatorClicked = false;

$(document).ready(function () {
    $('#calculator').on('click', '.calc-button', function () {

        // If button clicked is a number or decimal
        if ($(this).attr('data-value')) {
            if (operatorClicked === false) {
                firstNumber += $(this).data().value;
                console.log('first number is ' + firstNumber);
                $('#output').text(firstNumber);
            } else if (operatorClicked == true) {
                secondNumber += $(this).data().value;
                console.log('second number is ' + secondNumber);
                $('#output').text(secondNumber);
            }
        }

        // If button cliked is an operation
        if ($(this).attr('data-operator') && operatorClicked == false && firstNumber.length !== 0) {
            operatorClicked = true;
            operator = $(this).data().operator;
            console.log('operator is: ' + operator);
            $('#output').text(operator);
        }

        // If button clicked is equals


        // If button clicked is clear
    });
});