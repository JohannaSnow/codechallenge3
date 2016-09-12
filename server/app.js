var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

var portDecision = process.env.PORT || 3000;

// setup 'public' as a static resource /// this means anyone can use it
app.use(express.static('public'));
// spin up server
app.listen( portDecision, function(){
  console.log('Server is listening on heroku or port 3000');
}); //end server powering up



// base url hit
app.get('/', function(req,res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
}); // end get

//get requested calculation and calculate numbers sent
app.post( '/', urlencodedParser, function ( req, res) {
  //console.log('in post');
  //console.log('this is req',  req.body);




  // initial jokes provided by the client
jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  }
];
