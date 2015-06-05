routesApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {  

  $stateProvider

  	.state('merchant', {
  		url:'/merchant',
  		templateUrl: 'app/components/session/merchant.html',
      controller: 'merchantController'
  	})

    .state('merchant.home', {
    	url: '/home',
    	templateUrl: 'app/components/session/home/home.html'
    })

    .state('merchant.editDetails', {
      url: '/edit-details',
      templateUrl: 'app/components/session/home/edit-details.html',
      controller: 'detailsController'
    })

    .state('merchant.product', {
      url: '/product',
      templateUrl: 'app/components/session/product/product.html',
      controller: 'addProductController'
    })

    .state('merchant.addProduct', {
      url: '/add-product',
      templateUrl: 'app/components/session/product/add-product.html',
      controller: 'addProductController'
    })

    .state('merchant.productDetails', {
      url: '/product-details',
      templateUrl: 'app/components/session/product/product-details.html'
    })

    .state('merchant.settings', {
      url: '/settings',
      templateUrl: 'app/components/session/settings/settings.html',
      controller: 'tokenController'
    })

    .state('merchant.changePassword', {
      url: '/change-password',
      templateUrl: 'app/components/session/settings/change-password.html',
      controller: 'changePasswordController'
    })

  // $locationProvider.html5Mode(true);

}]);