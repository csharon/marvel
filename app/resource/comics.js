angular.module('mc.resource.Comics', ['restangular'])
  .provider('comicResource', function () {

    var _config = {apikey: ''};

    this.setConfig = function (options) {
      _.extend(_config, options);
    }

    this.$get = ['Restangular', '$q', function (Restangular, $q) {

      var comics = Restangular.all('comics');
      Restangular.addResponseInterceptor(function (data, operation) {
        if (operation === 'getList') {
          return data.data.results;
        }
        return data;
      });
      Restangular.extendModel('comics', function (model) {
        model.characterCount = model.characters.items.length;
        model.thumb = model.thumbnail.path + '.' + model.thumbnail.extension;
        return model;
      });

      return {

        list: function (options) {
          var params = _.extend({}, _config, options)
          return comics.getList(params).then(
            function (resp) {
              return resp;
            },
            function (err) {
              return $q.reject(err);
            }
          );
        }

      };

    }];

  });