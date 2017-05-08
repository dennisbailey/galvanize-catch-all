// Create an empty objects to store the available free and paid sources
  var free = {};
  var paid = {};
  var subscription = {};
  var other = {};

// Guidebox API Movie Streaming Sources Search
  var searchSources = {
    "async": true,
    "crossDomain": true,
    "url": '',
    "method": "GET"
  }


var searchForSources = function() {
  $.ajax(searchSources).done(function (searchSourcesResponse) {
    var free = searchSourcesResponse["free_web_sources"];
    var paid = searchSourcesResponse["purchase_web_sources"];
    var subscription = searchSourcesResponse["subscription_web_sources"];
    var other = searchSourcesResponse["other_sources"]["tv_on_demand"];
    
    
    var findAvailableSources = function(type) {
      for (var i = 0; i < freeSources.length; i++) {     
      var store = type[i]["display_name"];
      var link = type[i]["link"];
      var id = searchSourcesResponse["id"];
      
      var resultLink = '<a href="' + link + '">' + store + '</a>'
      
      $('#' + id + "-" + type + "" +'').append(resultLink + '<br>'); 
      }
     
      var SourceCheck = Object.keys(type).length;
      
      if ( SourceCheck === 0 ) {
        $('#' + id + "-free" +'').append('<p>I\'m sorry Dave, but currently there aren\'t any streaming options of this type available.</p>');
      }
    }
    
    findAvailableSources(free);
    findAvailableSources(paid);
    findAvailableSources(suscription);
    findAvailableSources(other);
    
  }); 
  
}