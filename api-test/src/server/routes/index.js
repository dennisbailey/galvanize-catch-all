var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  console.log('hello');
  request('https://api.meetup.com/2/categories?key=475233687d4252104a1a4ff3ae2965&sign=true&photo-host=public&page=40', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body[0]) 
  }
})
});

module.exports = router;