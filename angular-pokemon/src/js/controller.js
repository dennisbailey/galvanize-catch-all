app.controller('HomeController', function($scope, $http){
  $scope.loadingChar = false;
  $scope.loadingMove = false;
  
  // This function generates a random number within the Pokémon character and move range  
  $scope.rand = function (type) {
    if (type === 'char') {
      var rand = Math.round(Math.random() * 721) + 1;
      $scope.charImg = 'http://pokeapi.co/media/img/'+ rand +'.png';
      return 'http://pokeapi.co/api/v2/pokemon/' + rand ;
      }
    if (type === 'move') {
      return 'http://pokeapi.co/api/v2/move/' + (Math.round(Math.random() * 639) + 1);}
  };
  
  $scope.charGet = function () {
    $scope.loadingChar = true;
     
    $http.get($scope.rand('char') )
    .then(function(result){
      $scope.char = result.data;
      $scope.loadingChar = false;
    });
  };
    
  $scope.moveGet = function () {
    $scope.loadingMove = true;
     
    $http.get($scope.rand('move') )
    .then(function(result){
      $scope.move = result.data;
      $scope.loadingMove = false;
    });
  
  };

});