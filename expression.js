function setExpresssion(x, y, operator) {
    var expression = {};
    if (operator === 'add') {
        expression.result = x + y;
    } else if (operator === 'subtract') {
        expression.result = x - y;
    } else if (operator === 'multiply') {
        expression.result = x * y;
    } else if (operator === 'divide') {
        expression.result = x / y;
    }
    return expression;
}

module.exports = setExpresssion;