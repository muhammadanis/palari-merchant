var routesApp = angular.module('routesApp', ['ui.router','loginApp']);

routesApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {  

  $urlRouterProvider.otherwise('/login');

  $stateProvider

    .state('home', {
    	url: '/',
    	templateUrl: 'app/components/merchant/home.html'
    })

  // $locationProvider.html5Mode(true);

}]);