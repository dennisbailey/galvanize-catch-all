// add scripts
var request = require('request');
var key = 'AIzaSyC4ZRr9TxQYpiLREC8yxyb0dLm-CTsz_Yw';

$(document).on('ready', function() {
  console.log('sanity check!');
  
  $('form').submit( function(e) {
    e.preventDefault();
    
    var url = $('#input').val();

    var options = {
      uri: 'https://www.googleapis.com/urlshortener/v1/url?key='+ key +'',
      method: 'POST',
      json: {
        "longUrl": url
      }
    };
    
    // Create a request handler
    function requestHandler (req, res) {
      request(options, function (error, response, body) {
        if (!error  && response.statusCode == 200) {
          console.log(body.id);
          $('#result').append(body.id) // Append the shortened url.
          res.end('Success');
        }
      });
    } 
    
  })
 
});