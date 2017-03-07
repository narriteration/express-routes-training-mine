// REQUIREMENTS
var express = require('express');
var app = express();

// MIDDLEWARE
app.use(express.static('public'));

//ROUTES (FILL THIS IN)
// Create a root route that responds by sending the index.html file from the views directory.

app.get('/', function rootDir(req, res) {
    res.send("Chelsea!");
})

// SERVER START
app.listen(4000, function(){
    console.log("Localhost listening at localhost: 4000");
});
