// Require http
var readline = require('readline');
var http = require('http');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the port
var port = 8080;

// Create the server
var server = http.createServer(function(req, res) {
  res.end('end');
});

server.listen(3000, '127.0.0.1');


// Define the function for handling request-response
// function requestHandler(req, res) {
//  fs.readFile(file, 'utf8', function(err, data) {
//    res.statusCode = 200;
//    res.writeHead('Content-Type', 'application/json')
//     res.end(data.toString());
//   });
// };

// Add listener / start server
// server.listen(port, function() {
//   console.log('Your Pizza Party server is listening on http://localhost:' + port);
// });




rl.question('Give me a filename (or path if not in this directory) ', function(filename) {
  var file = filename;
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
  });
  rl.close();
});


