// Add an event listener
$('#call').on('click', function(){
  // Declare variables
  var title = $('#title').val();
  var plot = $('#plot').val();
  var responseType = $('#res').val();
  var url = 'https://www.omdbapi.com/?t='+title+'&y=&plot='+plot+'&r='+responseType;
  
  // API Request
  $.get(url, function(data){
    console.log(data);
  });
  
  
//   $.ajax({
//   url: url,
//   method: "GET",
//   success: function(data) {
//     console.log(data);
//     }
//   });
});


