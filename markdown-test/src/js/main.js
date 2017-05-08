// add scripts

//var marked = require('marked');
$(document).on('ready', function() {
  console.log('sanity check!');
  
  var gisturl = '';
  
  var userGists = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.github.com/users/dennisbailey/gists",
    "method": "GET",
  }
  
  $.ajax(userGists).done(function (response) {
    var fileName = Object.keys(response[0].files);
    gisturl = response[0].files["Test.md"].raw_url;
    console.log(gisturl);;
  });  
  
  var urlrequest = {
    "async": true,
    "crossDomain": true,
    "url": "https://gist.githubusercontent.com/dennisbailey/8121d7d586a7086eb4c9/raw/d1181ee1e10b3b691a49b19c9483ce759f308e06/Test.md",
    "method": "GET",
  }
  
  

  $.ajax(urlrequest).done(function (urlResponse) {
    console.log(urlResponse);
    var md_content = urlResponse;
    var html_content = markdown.toHTML( md_content );
    $('.container-fluid').append(html_content)
  });  
});
