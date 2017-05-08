var Animal = require('./animal');

function Zoo(location, name) {
 // write code here
 this.location = location;
 this.name = name;
 this.status = 'closed';
 this.animals = [];
}


Zoo.prototype // write more code here

Zoo.prototype.isOpen = function() {
  if (this.status === 'closed') {return false} 
  else {return true}
}

Zoo.prototype.open = function () {
  this.status = 'open';
}

Zoo.prototype.close = function () {
  this.status = 'closed';
}

Zoo.prototype.addAnimal = function (animal) {
  // Create an array of exisitng animal kinds
  var kindArray = [];
  for (var i = 0; i < this.animals.length ; i++) {
   kindArray.push(this.animals[i].kind);
  }
  // if the animal kind cannot be found in the array of exisiting kinds and zoo is open add the animal
  if (kindArray.indexOf(animal.kind) === -1 && (this.status === 'open') && (typeof animal === 'object') ) {
    this.animals.push(animal)
    }
}

Zoo.prototype.removeAnimal = function (animal) {
    for (var i = 0; i < this.animals.length; i++) {
      if (animal === this.animals[i] && this.status === 'open') {
        this.animals.splice(i, 1);
    }  
  }
}

Zoo.prototype.changeLocation = function (locationUpdate) {
  this.location = locationUpdate;
}
module.exports = Zoo;
