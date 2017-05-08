var http = require('http');
var request = require('request');
var port = 8081;

var imdbID = process.argv[2];
var url = 'http://www.omdbapi.com/?i=' + imdbID + '&r=json';

// Create a server
var server = http.createServer(requestHandler); 

// Create a request handler
function requestHandler (req, res) {
  request(url, function (error, response, body) {
    if (error) {
      res.end('Something went wrong');
    } else {
      //parse the data
      res.setHeader('Content-Type', 'application/json');
      var json = JSON.parse(response);
      
      res.end(response.body);
      
    }
  })  
}

server.listen(port, function() {
  console.log('Your janky server is running on port… ' + port);
});
