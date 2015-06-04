//create a new module
angular.module('zero',['ui.router','sails.io'])

//config routing
.config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function($stateProvider,$urlRouterProvider,$locationProvider) {

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  $stateProvider

    .state('home', {
        url: '/',
        templateUrl: 'views/index.html',
        controller: 'IndexController'
    })

    .state('console', {
        url: '/console',
        templateUrl: 'views/console.html',
        controller: 'ConsoleController'
    })

    .state('server', {
        url: '/server',
        templateUrl: 'views/server.html',
        controller: 'ServerController'
    })

    .state('database', {
        url: '/database',
        templateUrl: 'views/database.html',
        controller: 'DatabaseController'
    })

    .state('socket', {
        url: '/socket',
        templateUrl: 'views/socket.html',
        controller: 'SocketController'
    })

    .state('settings', {
        abstract: true,
        url: '/settings',
        templateUrl: 'views/settings.html',
        controller: 'SettingsController'
    })

    .state('settings.general', {
        url: '',
        templateUrl: 'views/settings/general.html',
        controller: 'SettingsController'
    })

    .state('settings.mail', {
        url: '/mail',
        templateUrl: 'views/settings/mail.html',
        controller: 'SettingsController'
    })

    .state('settings.phone', {
        url: '/phone',
        templateUrl: 'views/settings/phone.html',
        controller: 'SettingsController'
    });

}]);
