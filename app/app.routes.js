var routesApp = angular.module('routesApp', ['ui.router']);

routesApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {  

  $urlRouterProvider.otherwise('/merchant/product');

  $stateProvider

  	.state('merchant', {
  		url:'/merchant',
  		templateUrl: 'app/components/session/merchant.html'
  	})

    .state('merchant.home', {
    	url: '/home',
    	templateUrl: 'app/components/session/home/home.html'
    })

    .state('merchant.editDetails', {
      url: '/edit-details',
      templateUrl: 'app/components/session/home/edit-details.html'
    })

    .state('merchant.product', {
      url: '/product',
      templateUrl: 'app/components/session/product/product.html'
    })

    .state('merchant.addProduct', {
      url: '/add-product',
      templateUrl: 'app/components/session/product/add-product.html'
    })


  // $locationProvider.html5Mode(true);

}]);