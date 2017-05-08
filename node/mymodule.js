//Step 6
var fs = require('fs');
var path = require('path')

module.exports = function (path, ext, callback) {
  var extLength = ext.length;
    
  fs.readdir(path, function(err, list) {
    if(err) {
      return callback(err);
    } else {
      
      for (var i = 0; i < list.length; i++) {
        var fileLength = list[i].length;
        if (list[i].substr(fileLength - extLength, fileLength - 1 ) === ext ) {
          console.log(list[i]);
        }  
      }    
    
    }
  }); 
}

