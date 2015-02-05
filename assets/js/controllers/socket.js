angular.module('zero')
.controller('SocketController',function($scope,$sailsSocket,Messages){
  "use strict";

  $scope.newMessage = {};

  Messages.load().then(function(messages){
    $scope.messages = messages;
  });

  $scope.postMessage = function(newMessage){
    Messages.send(newMessage).then(function(){
      $scope.newMessage.body = '';
    })

  }

});
