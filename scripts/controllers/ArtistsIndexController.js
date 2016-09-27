angular.module('soundFinder')
    .controller('ArtistsIndexController', ArtistsIndexController);

console.log("AristIndexControllerLinked!");

ArtistsIndexController.$inject = ['$http', '$routeParams', '$location'];

function ArtistsIndexController($http, $routeParams, $location) {
    // console.log("ArtistsIndexController!");
    var vm = this;
    var artistId = $routeParams.index || '3TVXtAsR1Inumwj472S9r4';

    $http({
        method: 'GET',
        url: 'https://api.spotify.com/v1/artists/' + artistId + '/related-artists'
    }).then(function successCallback(response) {
        // console.log(vm.data);
        vm.artists = response.data.artists;
        console.log(response.data.artists);
    }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
    });

}
