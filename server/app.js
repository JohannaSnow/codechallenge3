var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

var portDecision = process.env.PORT || 3000;
// initial jokes provided by the client
var currentJokes = [
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
// setup 'public' as a static resource /// this means anyone can use it
app.use(express.static('public'));
// spin up server
app.listen( portDecision, function(){
  console.log('Server is listening');
}); //end server powering up

// base url hit
app.get('/', function( req, res ){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
}); // end base url

// set up a path
app.post( '/jokes', urlencodedParser, function ( req, res) {
  console.log('jokes path hit', req.body);
  jokes.push(req.body);
  console.log( 'jokes', currentJokes);
  // send currentJokes back to client
    //assemble an objectToSend
  var objectToSend = {
    allJokes: currentJokes
  };
  res.send( objectToSend);

});


app.post('/submitButton', urlencodedParser, function(req, res){
  console.log('submitButton hit:', req.body);
  console.log('newJoke', newJoke);
});//end submitButton post
