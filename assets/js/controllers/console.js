angular.module('zero')
.controller('ConsoleController',['$scope','Zero',function($scope,Zero){
  "use strict";

  $scope.newCommand = '';

  $scope.executeCommand = function(newCommand){
    io.socket.post('/cli/run', {command: newCommand}, function(data, jwr){
        if (jwr.statusCode == 200){
            $('#result').text(data);
        } else {
            $('#result').text('ERROR: ' + jwr.statusCode + JSON.stringify(data.errors));
        }
    });
  }


}]);
