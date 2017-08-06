function setExpresssion(x, y, operator) {
    var expression = {};
    if (operator === '+') {
        expression.result = x + y;
    } else if (operator === '-') {
        expression.result = x - y;
    } else if (operator === '*') {
        expression.result = x * y;
    } else if (operator === '/') {
        expression.result = x / y;
    }    
    return expression;
}

module.exports = setExpresssion;