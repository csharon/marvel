/**
 * Created by csharon on 6/18/14.
 */
angular.module('mc.components.ListGroup', ['mc.tmpls'])

  .controller('listGroupCtrl', function ($scope) {

    $scope.selectedItem = {};

    this.selectItem = function (item) {
      console.log(angular.toJson(item));
      $scope.selectedItem = item;
    }
  })

  .directive('mcListGroup', function () {
    return {
      restrict: 'EA',
      replace: true,
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
  })

  .directive('mcListGroupItem', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/components/mc-list-group/mc-list-group-item.html',
      scope: {
        item: '=',
        countField: '=',
        labelField: '=',
        thumbnail: '=',
        description: '='
      },
      require: '^mcListGroup',
      link: function (scope, elem, attrs, ctrl) {
        scope.selectItem = function () {
          ctrl.selectItem(scope.item);
        };
      }
    }
  });