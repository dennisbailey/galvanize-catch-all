function multiplyBy10 (array) {
  return array.map(function(el) {
  return el * 10;
  });
};

// function shiftRight (input) {
//   var lastElement = input.pop();
//   input.unshift(lastElement);
//   return input;
// };

function shiftRight (array) {
  return array.map (function(val, index, arr){
    return arr[index-1] || arr[arr.length-1];
  })
}

// word.replace(/[^aeiou]/ig,'');
function onlyVowels (array) {
  return array.map (function(el){
      var vowels = '';
      for (var i = 0; i < el.length ; i++) {
        var character = el.charAt(i);
        if (character === 'a') {
            vowels = vowels + character;
        }
        else if (character === 'e') {
            vowels = vowels + character;
        }
        else if (character === 'i') {
            vowels = vowels + character;
        }
        else if (character === 'o') {
            vowels = vowels + character;
        }
        else if (character === 'u') {
            vowels = vowels + character;
        }
      }
      return vowels;
  });
};

function doubleMatrix (array) {
   return array.map(function(arrayElement){
     return arrayElement.map(function(el){
       return (el * 2);
     });
   });
}


module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};