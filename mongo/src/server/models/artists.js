var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistsSchema = new Schema({
  name: String,
  movement: String,
  imageURL: String
});

var Artists = mongoose.model('artists', ArtistsSchema);

Artists.find({}, function (err, artists) {
  if (err) { console.log('Error!', err);}
  console.log('Artists:', artists);
})

module.exports = Artists;