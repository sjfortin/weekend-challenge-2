var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

var x;
var y;
var operator;
var compute = {};

app.post('/calculation', function (req, res) {
    x = parseInt(req.body.numberOneValue);
    y = parseInt(req.body.numberTwoValue);
    operator = req.body.operation;
    getCompute(x, y);
    res.sendStatus(201);
});

app.get('/compute', function (req, res) {
    res.send(compute);
});

app.listen(port, function () {
    console.log('Listening on port', port);
});

function getCompute(x, y) {
    if (operator === 'add') {
        compute.result = x + y;
    } else if (operator === 'subtract') {
        compute.result = x - y;
    } else if (operator === 'multiply') {
        compute.result = x * y;
    } else if (operator === 'divide') {
        compute.result = x / y;
    }
}