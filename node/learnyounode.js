// Learn You Node

// Step 1
//console.log("HELLO WORLD");

// Step 2
// var sum = 0;
// 
// for (var i = 2; i < process.argv.length; i++) {
//   num = Number(process.argv[i]);
//   sum = num + sum;
// }
// 
// console.log(sum);

// Step 3
// var fs = require('fs');
// 
// var buf = fs.readFileSync(process.argv[2]);
// 
// var str = buf.toString();
// var newLines = str.split('\n');
// console.log(newLines.length - 1);

// Step 4
// var fs = require('fs');
// 
// fs.readFile(process.argv[2], 'utf8', function(err, response){
//   if(!err) {
//     var newLines = response.split('\n');
//     console.log(newLines.length - 1);
//   } else {
//     console.log('Something went wrong');
//   }
// });
 
//  Step 5
// var fs = require('fs');
// var path = process.argv[2];
// var ext = process.argv[3];
// var extLength = ext.length;
//   
// fs.readdir(path, function(err, list) {
//   for (var i = 0; i < list.length; i++) {
//     var fileLength = list[i].length;
//     if (list[i].substr(fileLength - extLength, fileLength - 1 ) === ext ) {
//       console.log(list[i]);
//     }  
//   }
// });

//Step 6
var mymodule = require('./mymodule.js');

var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];

mymodule(path, ext, function(err, list) {
  if (err) {
   console.log(err);
  }
  else list.forEach(function (file) {
   console.log(file);
  })
});

// Step 7
// var http = require('http')
// var url = process.argv[2];
// 
// 
// http.get(url, function(response) {
//   response.setEncoding('utf8');
//   
//   response.on("data", function (data) {
//     console.log(data);
//   });
//   
//   response.on("error", function (error) { 
//     console.error('error');
//   });
//   
// });

// Step 8
// var http = require('http');
// var bl = require('bl');
// 
// http.get(process.argv[2], function(response){
//   response.pipe(bl(function (err, data) { 
//     if (!err){
//       console.log(data.toString().length);
//       console.log(data.toString());
//     } else {
//       console.error(err);
//     }
//      
//   }));
// });

// Step 9
// var http = require('http');
// var bl = require('bl');
// 
// var first = process.argv[2];
// var second = process.argv[3];
// var third = process.argv[4];
// 
// http.get(first, function(response) {
//   response.
// })
