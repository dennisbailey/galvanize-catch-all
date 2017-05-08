var code = require('../main');
var expect = require('chai').expect;
  
describe("Leap Year", function() {
  it("should say 'Leap year!' when ran", function() {
    expect(code.leapYear(4)).to.equal("Leap year!");
  });
});

describe("Leap Year", function() {
  it("should say 'Leap year!' when ran", function() {
    expect(code.leapYear(1600)).to.equal("Leap year!");
  });
});

describe("Leap Year", function() {
  it("should say 'Not a leap year!' when ran", function() {
    expect(code.leapYear(1700)).to.equal("Not a leap year!");
  });
});

describe("Leap Year", function() {
  it("should say 'Not a leap year!' when ran", function() {
    expect(code.leapYear(1701)).to.equal("Not a leap year!");
  });
});