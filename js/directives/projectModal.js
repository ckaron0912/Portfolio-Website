app.directive('projectModal', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'templates/projectModal.html'
  };
});
