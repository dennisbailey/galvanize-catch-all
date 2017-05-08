// Wes's example

angular.module("pokemonGenerator", [])
.controller("MainController", function ($scope, PokemonService) {
  $scope.generatePokemon = function () {
    $scope.loadingName = true;

    PokemonService.generatePokemon().then(function (result) {
      $scope.pokemon = result.data;
      $scope.img = result.data.sprites.front_default;
      $scope.loadingName = false;
    });
  };
  
  $scope.generateMove = function () {
    $scope.loadingMove = true;
        
    PokemonService.generateMove().then(function (result) {
      $scope.move = result.data.names[0].name;
      $scope.loadingMove = false;
    });
  };
})
.service("PokemonService", ["$http", "$q", function ($http, $q) {
  var cache = {};

  return {
    generatePokemon: function () {
      var random = Math.floor(Math.random() * 3)+1;
//       var random = 6;
      console.log(cache);
      
      if ( cache[random] ) {
          return $q.when(cache[random]);
      }
      
      return $http({
        url: 'http://pokeapi.co/api/v2/pokemon/' + 
              random + '/',
        method: 'GET'
      }).then(function (result) {
        cache[random] = result;
        return result;
      });
    },
    generateMove: function () {
      var random = Math.floor(Math.random() * 639)+1;
      return $http.get({
        url: 'http://pokeapi.co/api/v2/move/' + 
              random + '/',
        method: 'GET'
      });
    },
  };
}]);