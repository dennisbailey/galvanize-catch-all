var http = require('http');

var requestHandler = function (req, res) {
  res.end(result)

}

var server = http.createServer(requestHandler); 

server.listen(1337, function() {
  console.log('Your elite server is running…');
})