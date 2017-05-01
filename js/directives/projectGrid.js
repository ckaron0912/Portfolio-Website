app.directive('projectGrid', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'templates/projectGrid.html'
  };
});
