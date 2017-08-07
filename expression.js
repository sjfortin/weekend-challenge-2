
// Determines the expression to send to client.js
function setExpresssion(x, y, operator) {
    var expression = {};
    switch (operator) {
        case '+':
            expression.result = x + y;
            break;
        case '-':
            expression.result = x - y;
            break;
        case '*':
            expression.result = x * y;
            break;
        case '/':
            expression.result = x / y;
            break;
        default:
            break;
    }

    return expression;
}

module.exports = setExpresssion;