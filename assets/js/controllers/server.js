angular.module('zero')
.controller('ServerController',['$scope','Zero',function($scope,Zero){
  "use strict";

  Zero.server().then(function(server){
    console.log(server);
    $scope.json = JSON.stringify(server,undefined,4);
  });

}]);
