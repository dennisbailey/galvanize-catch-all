// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var request = require('request');


// *** express instance *** //
var app = express();


// *** view engine *** //
var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');


// *** static directory *** //
app.set('views', path.join(__dirname, 'views'));


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));


// *** main routes *** //
app.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Get shorty',
    array: ['a', 'b', 'c']
    });
})

app.post('/', function(req, res, next) {
  var urlToShorten = req.body.url;
  
  var key = 'AIzaSyC4ZRr9TxQYpiLREC8yxyb0dLm-CTsz_Yw';
  var requestURL = 'https://www.googleapis.com/urlshortener/v1/url?key=' + key;
  
  var options = {
    url: requestURL,
    headers: {
      'Content-Type': 'application/json'
    },
    body: {longUrl: urlToShorten},
    json: true
  };
  
  request.post(options, function(error, response) {
    if (error) {
      console.log(error);
      res.end('Something went wrong');
    } else {
      var response = urlToShorten +' shortens to ' + JSON.stringify(response.body.id)
      res.render('index', {
        result: response
      });
    }
  });

})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
