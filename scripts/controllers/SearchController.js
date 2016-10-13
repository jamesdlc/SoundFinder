angular
  .module('soundFinder')
  .controller('SearchController', SearchController);

SearchController.$inject=['$http', '$routeParams'];
function SearchController($http, $routeParams) {
  var vm = this;

  vm.getArtists = function (query) {
    $http({
      method: 'GET',
      url: 'https://api.spotify.com/v1/search?q=' + query + '&type=artist&limit=4'
    }).then(function successCallback(succ) {
      vm.artists = succ.data.artists.items;
    }, function errorCallback(err) {
      console.log('error', err);
    });
  };
}
