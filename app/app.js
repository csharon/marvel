angular.module('marvelapp', [
  'xd.services.toastr',
  'xd.services.moment',
  'restangular',
  'ui.router',
  'mc.tmpls',
  'mc.components.NavBar',
  'mc.views.ComicList',
  'mc.resource.Comics'
])
  .config(function (RestangularProvider, $httpProvider, $stateProvider, $locationProvider, $urlRouterProvider, comicResourceProvider) {
    $locationProvider.html5Mode(true);

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    RestangularProvider.setBaseUrl('http://gateway.marvel.com/v1/public');

    comicResourceProvider.setConfig({apikey: 'd20b1dded050ba69f393209d985835eb'});

    $stateProvider
      .state('comiclistStacked', { url: '/', templateUrl: '/views/comic-list/comic-list-stacked.html', controller: 'comicListCtrl'})
      .state('comiclistSplit', { url: '/split', templateUrl: '/views/comic-list/comic-list-split.html', controller: 'comicListCtrl'});

    $urlRouterProvider.otherwise('/');
  });