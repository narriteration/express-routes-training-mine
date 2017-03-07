// REQUIREMENTS
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


// MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


//ROUTES (FILL THIS IN)

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
    res.status(418).send('Number updated successfully!');
});

// ARTWORKS


var artworks = [
    {title: "Girl with the pearl earring",
    artist: "Johannes Vermeer",
    description: "Classic euro art!"},
    {title: "BodyPosi",
    artist: "Feminist Felicia",
    description: "90's feminism new wave"},
    {title: "The Kiss",
    artist: "Klimt" ,
    description: "Very hot. Very classic."},
];

app.get('/artworks', function(req,res){
    res.json(artworks);
});

app.post('/artworks', function artworksCreate(req, res) {
  var title = req.body.title;
  var artist = req.body.artist;
  var desc = req.body.description;
  var newArtwork = { title: title, artist: artist, description: desc };
  artworks.push(newArtwork);
  res.json(artworks);
});



// SERVER START
app.listen(3000, function(){
    console.log("Localhost listening at localhost: 3000");
});
