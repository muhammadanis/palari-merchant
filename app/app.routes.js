var routesApp = angular.module('routesApp', ['ui.router','loginApp', 'createMerchantApp']);

routesApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {  

  $urlRouterProvider.otherwise('/login');

  // $locationProvider.html5Mode(true);

}]);