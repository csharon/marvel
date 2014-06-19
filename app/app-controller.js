angular.module('marvelapp')
  .controller('appCtrl', function ($scope, xdMoment) {
    $scope.appName = 'Comic Search';
    $scope.company = 'The Imaginary Comic Search Corp';
    $scope.currentYear = xdMoment().year();


  });