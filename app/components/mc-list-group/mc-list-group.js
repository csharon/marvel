/**
 * Created by csharon on 6/18/14.
 */
angular.module('mc.components.ListGroup', ['mc.tmpls'])

  .controller('listGroupCtrl', function ($scope) {

  })

  .directive('mcListGroup', function () {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      controller: 'listGroupCtrl',
      templateUrl: '/components/mc-list-group/mc-list-group.html',
      scope: {
        countField: '@',
        labelField: '@',
        thumbnail: '@',
        description: '@',
        items: '='
      }
    };
  });