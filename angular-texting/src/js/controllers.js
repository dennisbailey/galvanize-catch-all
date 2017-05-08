var app = angular.module('angularTexting', []);

app.controller('mainController', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);