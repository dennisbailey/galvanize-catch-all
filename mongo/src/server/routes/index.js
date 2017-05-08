var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mongo Art' });
});

router.get('/artists', function(req, res, next) {

  db.Artists.find(function (err, artists) {
    res.render('artists', { title: 'Ar-tee-sts', 
                            artists: artists });
  })
});

router.get('/artworks', function(req, res, next) {
  res.render('artworks', { title: 'ARTWORKS!!1' });
});

module.exports = router;
