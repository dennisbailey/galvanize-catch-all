function onlyEven (array) {
  return array.filter(function(el){
    if (el % 2 === 0) return el; 
  })
};

function onlyOneWord (array) {
  return array.filter(function(el){
    if (el.indexOf(' ') === -1) return el; 
  })
};

function positiveRowsOnly (array) {
  return array.filter(function(el){
    return el.every(function(ele){
      return ele > 0
    })
  });
};

function allSameVowels (array) {
  return array.filter(function(array){
    
  })
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};