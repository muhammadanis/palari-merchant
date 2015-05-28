var routesApp = angular.module('routesApp', ['ui.router'])

routesApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  
  $urlRouterProvider.otherwise('/login');

  $locationProvider.html5Mode(true);

})