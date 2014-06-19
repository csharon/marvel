angular.module('marvelapp')
  .controller('appCtrl', function ($scope, xdMoment) {
    $scope.appName = 'Comic Search';
    $scope.company = 'Pied Piper, LLC.';
    $scope.currentYear = xdMoment().year();


  });