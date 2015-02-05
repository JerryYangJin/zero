//create a new module
angular.module('zero',['ngRoute','sails.io'])

//config routing
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/index.html',
    controller: 'IndexController'
  });

  $routeProvider.
  when('/server', {
    templateUrl: 'views/server.html',
    controller: 'ServerController'
  });

  $routeProvider.
  when('/database', {
    templateUrl: 'views/database.html',
    controller: 'DatabaseController'
  });

  $routeProvider.
  when('/socket', {
    templateUrl: 'views/socket.html',
    controller: 'SocketController'
  });

  $routeProvider.
  when('/settings', {
    templateUrl: 'views/settings.html',
    controller: 'SettingsController'
  });

  $routeProvider.otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);

}]);
