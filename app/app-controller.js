angular.module('marvelapp')
  .controller('appCtrl', function ($scope, xdMoment) {
    $scope.appName = 'Comics';
    $scope.company = 'XDoji, LLC.';
    $scope.currentYear = xdMoment().year();


  });