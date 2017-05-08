var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/art-db');

module.exports = {
  Artists: require('./artists'),
  Artworks: require('./artworks')
}