// Find the common values in two arrays
var intersections = function (array1, array2) {
  
  // Create an empty result array to store intersections
  var result =[];
  
  
  // Loop through the array values and push any matches to the results array
  for (var i = 0; i < array1.length ; i++) { 
    
    for (var j = 0; j < array2.length; j++) { 
      
      if (array1[i] === array2[j]) {
        result.push(array1[i]);
      };
      
    }
      
  }

  return result;

};
