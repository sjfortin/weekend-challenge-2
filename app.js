var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

var calculation;

app.post('/calculation', function(req,res){
    console.log(req.body);
    calculation = req.body.numberOneValue + req.body.operation + req.body.numberTwoValue;
    res.sendStatus(201); 
});

app.get('/theCalculation', function (req, res) {
    res.send(calculation);
});

app.listen(port, function(){
    console.log('Listening on port', port); 
});