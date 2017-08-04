$(document).ready(function () {

        var numberOneValue = $('#number1').val();
        var numberTwoValue = $('#number2').val();
        var operator;
        $('#selectOperation').on('click', '.operator', function(){
            if($(this)[0].id === 'add') {
                operator = '+';
                console.log(operator);
                
            }
        });
});