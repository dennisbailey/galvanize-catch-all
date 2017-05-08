var utility = require('./util');

var testArray = [
  [0],
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

var test2 = '2234';

var results = utility(testArray, function(err, result){
  if (err) {return err;}
  else {console.log(result);}   
});

var results = utility(test2, function(err, result){
  if (err) {console.log(err);}
  else {console.log(result);}   
});