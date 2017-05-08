var flatten = function (input, callback) {
  if (!Array.isArray(input)) {
   return callback('please use an array', null)
  } else {
    resultArray = [];
    input.forEach(function(currentValue) {
      currentValue.forEach(function(currentValue){
        resultArray.push(currentValue);
      })
    })
  }
  
  return callback(null, resultArray)
}

module.exports = flatten