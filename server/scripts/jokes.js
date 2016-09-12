console.log ('sourced!');

///global object variable

var objectToSend = {
  author: 'none',
  jokes: 'joke',
  punchLine: 'punchLine',
};


$(document).ready(function(){
  console.log('Document ready!');
});

///Retrive current jokes
  $('#jokes').on('click' , function(){
    console.log('retrieve current jokes');
    // assemble the objectToSend so jokes come back from server
       objectToSend.author = $('#author').val();
       objectToSend.jokes = $('#jokes').val();
       objectToSend.punchLine = $("#punchLine").val();

});
//ajax call to current jokes route
$.ajax({
  type: 'POST',
  url: '/jokes',
  data: objectToSend,
  success: function(data) {
    console.log( 'successful ajax call:' , data);
  }
}); // end ajax
}); // end jokes click

/// created a new ajax to be able to submit new jokes

$('#submitButton').on('click', function(){
   console.log('in submit new joke ');
   var newJoke = {
   $.ajax({
     type:'POST',
     url:"/submitButton",
     data: submitButtonData,
     success: function(data){
       console.log('submitButton successful');
       //use entered name or placeholder value
       $('#Author').html($('#Author').val() || $('#Author').attr('placeholder'));
       $('#Joke').html($('#Joke').val() || $('#Joke').attr('placeholder'));
       $('#punchLine').html($('#Punchline').val() || $('#Punchline').attr('placeholder'));

}
}
)
 };//end Success
   });//end ajax /submit
 });//end submitButton click function


}); /// end doc ready




//
// //display jokes function
// var displayJokes = function(){
//a loop to go through the array
