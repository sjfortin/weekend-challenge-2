var x;
var y;
var operator;

var express = require('express');
var bodyParser = require('body-parser');
var setExpression = require('./expression');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/calculation', function (req, res) {
    console.log(req.body);
    x = parseFloat(req.body.numberOneValue);    
    y = parseFloat(req.body.numberTwoValue);
    operator = req.body.operation;
    res.sendStatus(201);
});

app.get('/calculationResult', function (req, res) {
    res.send(setExpression(x, y, operator));
});

app.listen(port, function () {
    console.log('Listening on port', port);
});