// What's an object? We live in a world of
// Objects -- everything from a speck of dust
// floating around the air to the chair your
// sitting on can be considered an object.

// Object Oriented Programming is a method
// of programming that focuses on making
// sense of abstract problems by creating
// a universe of objects that can live
// and interact with one another.

// So far we've created Objects like this:

var wes = { firstName: 'Wes', lastName: 'Reid' };

// This has worked great for our needs so
// far but we're going to use a new format
// so that we can:
// 1. Clearly note our Objects
// 2. Use the amazing 'this'
// 3. Save on memory

var WesTemplate = function () {
  this.firstName = 'Wes';
  this.lastName = 'Reid';
};

var Wes = new WesTemplate();

console.log(Wes);

// What's different?
// 1. We're using a function to create
//    the Wes object -- what's called
//    a 'constructor'
// 2. We create a Template version of
//    our object and then create a
//    new instance of it based off of
//    that Template.
// 3. We declare properties using the
//    'this' keyword.

// The end result is still an object!

// console.log(typeof Wes);

// It may not seem like we've done much, 
// but that's in part because we're not
// really using it correctly. Let's
// *abstract* the idea of an individual
// person to a person in general.

// We can construct new people from this
// by adding parameters to our constructor
// just like we would with any other
// function.

// var Human = function (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// var Wes = new Human('Wes', 'Reid');

// console.log(Wes);

// What're some other properties humans have?

// TODO:
// 1. Add at least three new properties onto
//    your own Human constructor. At least
//    one should have a number as a value.
// 2. Create your own Human object!