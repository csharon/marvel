/**
 * Created by csharon on 6/18/14.
 */
angular.module('mc.views.ComicList', [
    'mc.components.ListGroup',
    'xd.services.toastr',
    'mc.components.ComicFilter',
    'mc.services.ComicListModel'
  ])

  .controller('comicListCtrl', function ($scope, comicListModel) {

    $scope.comics = [];
    $scope.comicsLoading = false;

    $scope.$watch(
      function () {
        return comicListModel.comics();
      },
      function (val) {
        $scope.comics = val;
      }
    );

    $scope.$watch(
      function () {
        return comicListModel.comicsLoading();
      },
      function (val) {
        $scope.comicsLoading = val;
      }
    );

  });