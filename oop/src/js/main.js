// Beer

var Beer = function(name, abv, type) {
  this.name = name;
  this.abv = abv;
  this.type = type;
};

// Fridge
var Fridge = function() {
  this.allBeers = [];
};

Fridge.prototype.addBeer = function(beer) {
  this.allBeers.push(beer);
}

Fridge.prototype.drinkBeer = function(beer) {
  var index = this.allBeers.indexOf(beer);
  this.allBeers.splice(index, 1);
};

// Sanity Checks

var pop = new Beer('Root Beer', 0, 'Pop');
var ipa = new Beer('Juicy Banger', 6.0, 'IPA');

var beerFridge = new Fridge();

beerFridge.addBeer(pop);
beerFridge.addBeer(ipa);

console.log(Fridge.allBeers);

Fridge.drinkBeer(pop);

console.log(Fridge.allBeers);