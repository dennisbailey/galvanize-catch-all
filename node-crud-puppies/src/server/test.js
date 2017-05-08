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
        query.on('row', function(error, result) {
            responseArray.push(result.rows);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            return res.json(responseArray);
            done();
        });
      pg.end();
    });

});