angular.module('mc.services.ComicListModel', ['mc.resource.Comics'])

  .factory('comicListModel', function ($q, comicResource, xdToastr) {

    var _comics = [],
      _comicsLoading = false;


    function fetchComics(opts) {
      _comicsLoading = true;
      comicResource.list(opts).then(
        function (resp) {
          _comics = resp;
        },
        function (err) {
          xdToastr.error(err.data.status, err.statusText);

        }
      ).finally(function () {
          _comicsLoading = false;
      });
    }

    /**
     * Public Interface
     */
    return {
      comics: function () {
        return _comics;
      },
      comicsLoading: function () {
        return _comicsLoading;
      },
      fetch: function (opts) {
        fetchComics(opts);
      }
    };

  });