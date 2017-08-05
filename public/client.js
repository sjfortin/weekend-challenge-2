$(document).ready(function () {

    // Set the operator selected
    var operator;

    $('#selectOperation').on('click', '.operator', function () {
        if ($(this)[0].id === 'add') {
            operator = '+';
            $('.operator').removeClass('active-operator');
            $(this).addClass('active-operator');
        } else if ($(this)[0].id === 'subtract') {
            operator = '-';
            $('.operator').removeClass('active-operator');
            $(this).addClass('active-operator');
        } else if ($(this)[0].id === 'multiply') {
            operator = '*';
            $('.operator').removeClass('active-operator');
            $(this).addClass('active-operator');
        } else if ($(this)[0].id === 'divide') {
            operator = '/';
            $('.operator').removeClass('active-operator');
            $(this).addClass('active-operator');
        }
    });

    // POST the calculation elements to the server
    $('#submitCalculation').on('click', function(){
        var numberOneValue = $('#numberOne').val();
        var numberTwoValue = $('#numberTwo').val();
        
        $.ajax({
            method: 'POST',
            url: '/calculation',
            data: {
                numberOneValue: numberOneValue,
                numberTwoValue: numberTwoValue,
                operation: operator
            },
            success: function (response) {
                console.log(response);
                getCalculation();
            }
        })
    });
});

// GET the final calucation logic from the server
function getCalculation() {
    $.ajax({
        method: 'GET',
        url: '/theCalculation',
        success: function (response) {
            console.log(eval(response));
        }
    });
}