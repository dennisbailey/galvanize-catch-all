module.exports = {
  leapYear: function (year) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {return 'Leap year!';} 
      else {return 'Not a leap year!';}
      }
    else if (year % 4 === 0) {return 'Leap year!';}
    else {return 'Not a leap year!';}
  }
}