// sample angular code

var app = angular.module('myApp', []);

app.controller("ExerciseController", function($scope){
  $scope.favColor = "Navy Blue";
  $scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
  var d = new Date();
  $scope.rightNow = d.getTime();
});

app.controller("madLibsController", function($scope){
  console.log(angular.element('#name').value);
  $scope.name = 'NAME';
  $scope.adj = 'ADJECTIVE';
  $scope.pluralNoun1 = 'PLURAL NOUN';
  $scope.pluralNoun2 = 'PLURAL NOUN';
  $scope.pluralNoun3 = 'PLURAL NOUN';
  $scope.insect = 'INSECT';
  $scope.verb = 'VERB';
  $scope.test = "Sanity Check";
  
});
