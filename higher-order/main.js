// ** Global Variables ** //
// ---------------------- //
var letters = [
'a','b','c','d','e','f',
'g','h','i','j','k','l','m',
'n','o','p','q','r','s',
't','u','v','w','x','y','z'
];
var vowels = ['a','e','i','o','u'];
var vowelsArray = [];

// Find all the vowels procedurally
// for (var i = 0; i < letters.length; i++) {
//   for (var j = 0; j < vowels.length; j++) {
//     if (letters[i] === vowels[j]) {
//       vowelsArray.push(letters[i]);
//     };
//   }
// }
// console.log(vowelsArray);

// Find all the vowels functionally
// ** Helper Functions ** //
// function getVowels(arr) {
//   // Loop through 'letters', passing each to isVowel
//   for (var i = 0; i < arr.length; i++) {
//     // If `isVowel`, push to 'vowelArray'
//     if (isVowel(arr[i])) {vowelsArray.push(arr[i])}   
//   }
//   return vowelsArray;
// }
// 
// function isVowel(letter) {
//   // Return true if a letter is a vowel
//   var vowels = ['a','e','i','o','u'];
//   for (var i = 0; i < vowels.length; i++) {
//     if (letter === vowels[i]) {return true;}
//   }
//   // If it is not a vowel return false
//   return false;
// }
// 
// console.log(getVowels(letters));

// Find all the vowels with functional and higher order functions
function getVowels(arr) {
  // Loop through 'letters', passing each to isVowel
  var vowelsArray = arr.filter(function(element) {
    // If `isVowel`, push to 'vowelArray'
    return isVowel(element);
  });
  return vowelsArray;
}

function isVowel(letter) {
  // Return true if a letter is a vowel
  var vowels = ['a','e','i','o','u'];
  
  
  for (var i = 0; i < vowels.length; i++) {
    if (letter === vowels[i]) {return true;}
  }
  // If it is not a vowel return false
  return false;
}

console.log(getVowels(letters));