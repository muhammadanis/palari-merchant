var routesApp = angular.module('routesApp', ['ui.router']);

routesApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {  

  $urlRouterProvider.otherwise('/merchant/product');

    .state('edit-details', {
      url: '/home',
      templateUrl: 'app/components/session/home/edit-details.html'
    })

  // $locationProvider.html5Mode(true);

}]);