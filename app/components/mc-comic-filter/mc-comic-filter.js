/**
 * Created by csharon on 6/21/14.
 */
angular.module('mc.components.ComicFilter', ['mc.services.ComicListModel'])
  .controller('comicFilterCtrl', function ($scope, comicListModel) {

    $scope.filterOptions = {
      formatType: '',
      noVariants: false,
      dateDescriptor: '',
      hasDigitalIssue: false,
      title: '',
      limit: 10
    };

    $scope.comicsLoading = false;

    $scope.getComics = function () {
      var opts = _.omit($scope.filterOptions, function (val) {
        return val === '' || val === false;
      });

      comicListModel.fetch(opts);
    };

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

  })

  .directive('mcComicFilterInline', function () {
    return {
      restrict: 'E',
      controller: 'comicFilterCtrl',
      templateUrl: '/components/mc-comic-filter/mc-comic-filter-inline.html'
    };
  })

  .directive('mcComicFilterVertical', function () {
    return {
      restrict: 'E',
      controller: 'comicFilterCtrl',
      templateUrl: '/components/mc-comic-filter/mc-comic-filter-vertical.html'
    };
  });