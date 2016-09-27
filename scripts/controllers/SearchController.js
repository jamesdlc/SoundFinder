angular
  .module('soundFinder')
  .controller('SearchController', SearchController);

SearchController.$inject=['$http', '$routeParams'];
function SearchController($http, $routeParams) {
  var vm = this;

  vm.getArtists = function (query) {
    $http({
      method: 'GET',
      url: 'https://api.spotify.com/v1/search?q=tania%20bowra&type=artist&q=' + query
    }).then(function successCallback(succ) {
      vm.playlists = succ.data.playlists.items;
    }, function errorCallback(err) {
      console.log('error', err);
    });
  };
}
