var http = require('http');
var request = require('request');
var port = 8081;

var key = 'AIzaSyC4ZRr9TxQYpiLREC8yxyb0dLm-CTsz_Yw';
var url = process.argv[2];

var options = {
  uri: 'https://www.googleapis.com/urlshortener/v1/url?key='+ key +'',
  method: 'POST',
  json: {
    "longUrl": url
  }
};

// Create a server
var server = http.createServer(requestHandler); 

// Create a request handler
function requestHandler (req, res) {
  request(options, function (error, response, body) {
    if (!error  && response.statusCode == 200) {
      console.log(body.id) // Print the shortened url.
      res.end('Success');
    }
  });
}

server.listen(port, function() {
  console.log('Your janky server is running on port… ' + port);
});
