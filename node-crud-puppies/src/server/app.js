// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var pg = require('pg');

// *** database *** //
var connectionString = 'postgres://localhost:5432/crud_puppies';


// *** routes *** //
var routes = require('./routes/index.js');


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
app.use('/', routes);


// Return all puppies
app.get('/api/puppies', function(req, res, next) {

    var responseArray = [];

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        
        // Handle connection errors
        if(err) {
          return res.status(500).json({ status: 'error', message: 'You broke it'});
          done();
        }

        // SQL Query > Select Data
        var sql = "SELECT * FROM puppies ORDER BY id ASC;"
        var query = client.query(sql);

        // Stream results back one row at a time
        query.on('row', function(row) {
            responseArray.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
          if (responseArray.length > 0) {
            res.json(responseArray);
          }
          res.json
            
            done();
        });
      pg.end();
    });

});

// Return a single puppy
app.get('/api/puppy/:id', function(req, res, next) {

    var responseArray = [];

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        
        // Handle connection errors
        if(err) {
          return res.status(500).json({ status: 'error', message: 'You broke it'});
          done();
        }

        // SQL Query > Select Data
        var sql = "SELECT * FROM puppies WHERE id = " + req.params.id +";"
        var query = client.query(sql);

        // Stream results back one row at a time
        query.on('row', function(row) {
            responseArray.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            res.json(responseArray);
            done();
        });
      pg.end();
    });

});


// Add a puppy
app.post('/api/puppies', function(req, res, next) {

    var newPuppy = req.body;

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        
        // Handle connection errors
        if(err) {
          return res.status(500).json({ status: 'error', message: 'You broke it'});
          done();
        }

        // SQL Query > Select Data
        var sql = "INSERT INTO puppies (name, breed) VALUES ('" + newPuppy.name +"', '" + newPuppy.breed + "');";
        console.log(sql);
        var query = client.query(sql);

        // After all data is returned, close connection and return results
        query.on('end', function() {
            res.json({ status: 'success', message: 'One more puppy in the databse.'});
            done();
        });
      pg.end();
    });

});

// Send a puppy to the farm
app.delete('/api/puppy/:id', function(req, res, next) {

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        
        // Handle connection errors
        if(err) {
          return res.status(500).json({ status: 'error', message: 'You broke it'});
          done();
        }

        // SQL Query > Select Data
        var sql = "DELETE FROM puppies WHERE id = " + req.params.id +";";
        console.log(sql);
        var query = client.query(sql);

        // After all data is returned, close connection and return results
        query.on('end', function() {
            res.json({ status: 'success', message: 'You sent a puppy to the farm'});
            done();
        });
      pg.end();
    });

});

// Update a puppy
app.put('/api/puppy/:id', function(req, res, next) {

    var field = req.body.field;
    var newValue = req.body.value;
    console.log(req.body);

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        
        // Handle connection errors
        if(err) {
          return res.status(500).json({ status: 'error', message: 'You broke it'});
          done();
        }

        // SQL Query > UPDATE Data
        var sql = "UPDATE puppies SET " + field + "='" + newValue + "' WHERE id="+req.params.id;
        console.log(sql);
        var query = client.query(sql);

        // After all data is returned, close connection and return results
        query.on('end', function() {
            res.json({ status: 'success', message: 'You updated the record for a puppy'});
            done();
        });
      pg.end();
    });

});


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
