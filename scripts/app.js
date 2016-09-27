angular.module('soundFinder', ['ngRoute'])
       .config(config);

console.log("linked!");
////////////
// ROUTES //    //  SAVE THIS FOR LATER
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/search/index.html',
      controller: 'SearchController',
      controllerAs: 'searchCtrl'
    })
    .when('/artists', {
      templateUrl: '/templates/artists/index.html',
      controller: 'ArtistsIndexController',
      controllerAs: 'artistsCtrl'
    })
    .when('/artists/:index', {
      templateUrl: '/templates/artists/index.html',
      controller:  'ArtistsIndexController',
      controllerAs:'artistsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
