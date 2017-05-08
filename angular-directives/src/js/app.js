// sample angular code

window.app = angular.module('editableItem', []);

app.controller('myController', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);
