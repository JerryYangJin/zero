angular.module('zero')
.controller('DatabaseController',function($scope,Zero){
  "use strict";

  Zero.database().then(function(database){
    $scope.json = JSON.stringify(database,undefined,4);
  });

});
