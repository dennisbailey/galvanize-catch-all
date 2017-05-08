function sum (array) {
  return array.reduce((prev, curr) => prev + curr);
};

// function productAll (matrix) {
//     return matrix.reduce(function(array, pre, cur){
//       return pre * cur;
//       return array.reduce(function(el, prev, curr){
//         return prev * curr;
//     });
//   });
// }

// Wes's solution
function productAll (array) {
    return array.reduce(function(product, row){
      product *= row.reduce(function(prev, curr){
        return prev * curr;
      });
      return product;
    }, 1) // this 1 is for the initial product
}

function productAll (matrix) {
  var result = 1;
  for (var i = 0; i < matrix.length; i++) {
    var row = matrix[i];
    for (var j = 0; j < row.length; j++) {
      result *= row[j]; 
    }     
  }
  return result;  
}


function objectify (array) {
  newObj = {};
  return matrix.reduce(function(array){
      return newObj[array[0]].array[1];
  });
};

function luckyNumbers (array) {
  return array.reduce(function(fortune, num, index, nums){
    if ( index === (nums.length - 1)) {
      return fortune += ( 'and ' + num );
    } else {
      return fortune += ( num + ', ');
    }
  }, 'Your lucky numbers are: ');
}

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};