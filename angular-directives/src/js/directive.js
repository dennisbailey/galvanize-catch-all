app.directive('makeEditable', function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: "./templates/editable.html",
    link: function(scope, element, attrs) {
      scope.editing = false;
      scope.showEdit = true;
      scope.showSave = false;
      scope.switchEditing = function () {
        scope.editing = !scope.editing;
        scope.showSave = !scope.showSave;
        scope.showEdit = !scope.showEdit;
      }
    }
  };
});