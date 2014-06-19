/**
 * Created by csharon on 6/18/14.
 */
angular.module('mc.views.ComicList', ['mc.components.ListGroup', 'mc.resource.Comics', 'xd.services.toastr'])

  .controller('comicListCtrl', function ($scope, comicResource, xdToastr) {

    $scope.comics = [];

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
      $scope.comicsLoading = true;
      var opts = _.omit($scope.filterOptions, function (val) {
        return val === '' || val === false;
      });

      comicResource.list(opts).then(
        function (resp) {
          $scope.comics = resp;
        },
        function (err) {
          xdToastr.error(err.data.status, err.statusText);

        }
      ).finally(function () {
          $scope.comicsLoading = false;
        }
      );
    };



  });