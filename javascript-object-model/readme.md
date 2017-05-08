# JavaScript Object Model

Lecture notes and examples live here!

### Intro

An introduction to creating 'Classes' and instances with JavaScript.

##### Objectives

* Create “Classes” and Instances with JS
  * Use constructor function syntax to create something similar to a class in Javascript
  * Capitalize variables pointing to constructor functions
  * Create instances with the `new` keyword
* Define and invoke functions as methods on objects
  * Stores functions in properties
  * Differentiate between functions and methods
  * Stores instance methods on the Prototype Object
* Use `this` to manipulate the current context
  * Add methods to objects that use 'this'
  * Refer to instances inside the constructor function
    using 'this'
* Use Properties to store State on an Instance
  * Use `this` to create instance properties, as passed in through the parameters
  * Use good design practices (encapsulation) to ensure “classes” are responsible for
    appropriate state tracking
  * Does not store state on the constructor function itself

### Character Building

Learn some of the more complex behaviors of objects.

##### Objectives

* Create “Classes” and Instances with JS
  * Uses accessor methods and closures to create private class variables
* Use Properties to store State on an Instance
  * Able to work with objects that reference each other in a complex 
    system (such as a game)
* Define and invoke functions as methods on objects
  * Creates closures to hide data and create accessors