module.exports = {
  allEven : allEven,
  allSameType : allSameType,
  positiveMatrix : positiveMatrix,
  allSameVowels : allSameVowels
};

// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every(function (num) {
    return (num % 2 === 0);
  });
};

// Check to see if all elements in an array
// are of the same type.

// function allSameType (input) {
//   return input.every(function (type, index, array){
//     return (typeof type === typeof array[index]);
//   });
// };

function allSameType (input) {
  var compare = typeof input[0];
  return input.every(function (type, index, array){
    return (compare === typeof array[index]);
  });
};

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (matrix) {
  return matrix.every(function(array2, index, array){
    return array2.every(function(el, index, array){
      return array[index] > 0;  
    });     
  }); 
};

// Check that all items in an array are strings
// and that they all only contain the same vowels.
// {
//       return word.replace(/[^aeiou]|(?=\1)/gi, '').length === 1;
//     })

function allSameVowels (arr) {
  return arr.every(function(word, index, array){
    return word[index].replace(/[^aeiou]|(?=\1)/gi, '').length === 1;
  })
};