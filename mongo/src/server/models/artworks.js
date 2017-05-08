var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtworksSchema = new Schema({
  location: String,
  name: String,
  year: Number,
  imageUrl: String
});

var Artworks = mongoose.model('artworks', ArtworksSchema);

Artworks.find(function (err, artworks) {
  if (err) { console.log('Error!', err);}
  console.log('Artworks:', artworks);
})

module.exports = Artworks;