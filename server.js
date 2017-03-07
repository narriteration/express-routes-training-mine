// REQUIREMENTS
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


// MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


//ROUTES (FILL THIS IN)
// Create a root route that responds by sending the index.html file from the views directory.

app.get('/', function rootDir(req, res) {
    res.sendFile('./views/index.html', {root: __dirname});
});

// GUESS MY NUMBER GAME
var targetNumber = 20;

app.get('/pick-a-number', function(req, res){
    var num = parseInt(req.query.number);
    if (num === targetNumber){
      res.send('Nailed it!');
    } else if (num > targetNumber) {
      res.send('Too High!');
    } else if (num < targetNumber) {
      res.send('Too Low.');
    } else {
      console.log('Something odd happened! target:', targetNumber, typeof(targetNumber),'num: ', num, typeof(num));
      res.send('Your guess is beyond compare!');
    }
});

app.post('/pick-a-number', function(req, res) {
    targetNumber = parseInt(req.body.number);
    response.status(418).send('Number updated successfully!');
});

// SERVER START
app.listen(3000, function(){
    console.log("Localhost listening at localhost: 3000");
});
