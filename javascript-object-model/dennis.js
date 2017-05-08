// var Human = function (firstName, lastName, rank, color, inches) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.rank = rank;
//   this.color = color;
//   this.heightInches = inches;
//   //this.heightStr = 'Need to convert!'
//   this.promote = function (){
//     this.rank = 'Super ' +this.rank;
//   }
//   
//   this.convert = function () {
//     this.heightStr = (Math.floor(this.heightInches / 12) + ' feet ' + (this.heightInches % 12) + ' inches')
//   }
//   
//   this.sayHeight = function () {
//     console.log('I am ' + this.heightStr + ' tall.');
//   }
// }
// 
// var dennis = new Human('Dennis', 'Bailey', 'Admiral', 'Blue', 67);
// console.log(dennis);
// dennis.convert();
// dennis.sayHeight();

// var Chapstick = function() {
//   this.color = 'Yellow';
//   this.volume = 100;
//   this.capped = true;
//   this.cap = function () {
//     this.capped = true;
//   }
//   this.uncap = function () {
//     this.capped = false;
//   }
//   this.use = function () {
//     this.volume = this.volume - 1;
//   }
// }
// 
// var myChapstick = new Chapstick();
// myChapstick.use();
// console.log(myChapstick);
// 
// 
// // myChapstick.uncap = function(){
// //   this.capped = false;
// // }
// // myChapstick.uncap();
// // 
// // myChapstick.cap = function(){
// //   this.capped = true;
// // }
// // myChapstick.cap();

var smartPhone = function (make, carrier, model, rev, color, os, osV, dock) {
  this.make = make;
  this.carrier = carrier;
  this.model = model;
  this.revision = rev
  this.color = color;
  this.os = os;
  this.osVersion = osV;
  this.dock = dock;
  this.battery = 100;
  this.cellSignal = 4;
  this.bluetoot = false;
  this.wifis = true;
  this.cellular = true;
  
  this.majorUpdate = function(){
    this.osVersion = Math.ceil(this.osVersion);
  }
  
  this.pointUpdate = function(){
    this.osVersion = this.osVersion + .1;
  }
  
  this.batteryDrain = function () {
    this.battery = this.battery - 10;
  }
  
  this.batteryStatus = function(){
    if (this.battery <= 10) {
      console.log('Find a charger!');
      } else {console.log('You\'re good');}
  }
  this.numOfBars = function(){
    this.bars = 'You have ' + this.cellSignal +' bars';
    console.log(this.bars);
  }
  
  this.toggle = function(property, state) {
    this[property] = state;
  };
  
  this.bluetootON = function () {
    this.bluetoot = true;
  }
  
  this.bluetootOFF = function () {
    this.bluetoot = false;
  }
 
  this.bluetootStatus = function () {
    var status = 'Bluetoot';
    if (this.bluetoot) {status = status +' is on';}
    else  {status = status +' is OFF'}
    console.log(status);
  }
 
 
 this.status = function (input) {
   var status = myiPhone.input;
   if (this.input) {status = status +' is On'}
   else {status = status +' is OFF'}
   console.log(status);
 }
  
}

var myiPhone = new smartPhone('Apple', 'Verizon', 'iPhone', '6S', 'Space Grey', 'iOS', 9.3, ['Mail', 'Overcast', 'Safari', 'Messages']);

myiPhone.pointUpdate();

myiPhone.majorUpdate();

myiPhone.batteryDrain();
myiPhone.batteryDrain();
myiPhone.batteryDrain();
myiPhone.batteryDrain();
myiPhone.batteryDrain();
myiPhone.batteryDrain();
myiPhone.batteryDrain();
myiPhone.batteryDrain();
myiPhone.batteryStatus();

myiPhone.batteryDrain();

myiPhone.batteryStatus();

myiPhone.numOfBars();

myiPhone.bluetootStatus();
myiPhone.toggle('bluetoot', true);
myiPhone.bluetootStatus();
myiPhone.toggle('bluetoot', false);
