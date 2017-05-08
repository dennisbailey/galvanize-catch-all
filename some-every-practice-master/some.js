module.exports = {
  anyGreaterThan10 : anyGreaterThan10,
  longWord : longWord,
  truePossibilities : truePossibilities,
  lostCarcosa : lostCarcosa
};

// Check to see if any of the elements in the 
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  return input.some(function (num) {
    return (num > 10);
  });
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input.some(function (str){
    return (str.length > 10);
  });
  
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  return input.some(function (boo) {
    return boo.some(function (boo2) {
      return (boo2 === true);
      });
    });
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  return input.some(function(str) {
    return str.includes('Lost');
  });
};