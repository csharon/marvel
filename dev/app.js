angular.module('marvelapp', [
  'xd.services.toastr',
  'xd.services.moment',
  'restangular'
])
  .config(function (RestangularProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    RestangularProvider.setBaseUrl('http://gateway.marvel.com');
  });