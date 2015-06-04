routesApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {  

  $stateProvider

  	.state('merchant', {
  		url:'/merchant',
  		templateUrl: 'app/components/session/merchant.html',
      controller: 'merchantController'
  	})

    .state('merchant.home', {
    	url: '/home',
    	templateUrl: 'app/components/session/home/home.html',
      controller: 'homeController'
    })

    .state('merchant.editDetails', {
      url: '/edit-details',
      templateUrl: 'app/components/session/home/edit-details.html',
      controller: 'detailsController'
    })

    .state('merchant.product', {
      url: '/product',
      templateUrl: 'app/components/session/product/product.html'
    })

    .state('merchant.addProduct', {
      url: '/add-product',
      templateUrl: 'app/components/session/product/add-product.html',
      controller: 'addProductController'
    })


  // $locationProvider.html5Mode(true);

}]);