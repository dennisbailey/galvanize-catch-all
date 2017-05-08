var charactersArray = [];
var vowelsArray = [];
var consonantsArray = [];

function wordToArray (input) {
  var allCaps = input.toUpperCase()
  for (var i = 0; i < allCaps.length ; i++) {
    var character = allCaps.charAt(i);
    charactersArray.push(character);
  }
}

// wordToArray ('zoom');
// console.log(charactersArray);

function vowelsOnly (charactersArray) {
  for (var i = 0; i < charactersArray.length; i++) {
    if (charactersArray[i] === 'A') {
      var vowel = charactersArray[i]
      vowelsArray.push(vowel);
    }
    else if (charactersArray[i] === 'E') {
      var vowel = charactersArray[i]
      vowelsArray.push(vowel);
    }
    else if (charactersArray[i] === 'I') {
      var vowel = charactersArray[i]
      vowelsArray.push(vowel);
    }
    else if (charactersArray[i] === 'O') {
      var vowel = charactersArray[i]
      vowelsArray.push(vowel);
    }
    else if (charactersArray[i] === 'U') {
      var vowel = charactersArray[i]
      vowelsArray.push(vowel);
    }
    else {
      consonantsArray.push(charactersArray[i])
    }
  }
}
 
vowelsOnly(charactersArray);
console.log(vowelsArray);

// function vowelComparison(input) {
//   if (vowelsArray.length === 1) {
//       return true;
//     }
//   else {
//     for (var i = vowelsArray.length; i >= 2; i--) {
//       var j = i-1;
//       var k = i-2;
//       
//       if (vowelsArray[j] !== (vowelsArray[k])) {
//         return false;
//       }
//       else {return true;}
//     } 
//   }
// }
// 
// vowelComparison(vowelsArray);
// 
// function vowelCheck (input) {
//   var a = wordToArray(input);
//   var b = vowelsOnly(a);
//   var c = vowelComparison(b);
//   console.log(c);
// }
//  
// vowelCheck('oligopoly');
// vowelCheck('zoom');