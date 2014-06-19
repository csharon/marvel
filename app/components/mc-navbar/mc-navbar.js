/**
 * Created by csharon on 6/18/14.
 */
angular.module('mc.components.NavBar', ['mc.tmpls'])
  .controller('headerCtrl', function ($scope) {

  })
  .directive('mcNavbar', function () {
    return {
      restrict: 'EA',
      replace: true,
      controller: 'headerCtrl',
      templateUrl: '/components/mc-navbar/mc-navbar.html'
    };
  });