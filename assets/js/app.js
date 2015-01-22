//create a new module
angular.module('zero',['ngRoute','sails.io'])

//config routing
.config(['$routeProvider',function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/chat.html',
    controller: 'ChatCtrl'
  });

  $routeProvider.
  when('/about', {
    templateUrl: 'views/about.html',
    controller: 'ChatCtrl'
  });

}]);
