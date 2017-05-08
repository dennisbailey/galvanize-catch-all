$(document).ready(function() {
  
  console.log("READY, PLAYER ONE?");
  
  $("#submit").click(function() {
    var title = $("#title").val();
    var plot = $("#summary").val();
    console.log(title);
    
    if ($("#year").val() === undefined) {
      var year = '';
    } else {var year = $("#year").val();}
    
    var movieRequest = {
    "url": "http://www.omdbapi.com/?t="+title+"&y=&plot=short&tomatoes=true&r=json",
    "method": "GET"
    }
    
    $.ajax(movieRequest).done(function(movieRequest) {
      console.log(movieRequest);
      var tomScore = movieRequest.tomatoRating;
      var tomVerdict = movieRequest.tomatoConsensus;
      console.log(tomScore);
      console.log(tomVerdict);
    });
  });
});  