var routesApp = angular.module('routesApp', ['ui.router'])

routesApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/payment');

  $stateProvider

    .state('payment', {
      url: '/payment',
      templateUrl: 'app/components/payment/payment.html'
    })

  $locationProvider.html5Mode(true);

})