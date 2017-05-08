var Human = function (firstName, lastName, rank, color) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.rank = rank;
  this.color = color;
}

var dennis = Human('Dennis', 'Bailey', 'Rear-Admiral', 'Blue');
console.log(dennis);