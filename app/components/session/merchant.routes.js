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
      url: '/product-details/:productId',
      templateUrl: 'app/components/session/product/product-details.html',
      controller: 'productDetailsController'
    })

    .state('merchant.editProduct', {
      url: '/edit-product/:productId',
      templateUrl: 'app/components/session/product/edit-product.html',
      controller: 'productDetailsController'
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

    .state('merchant.transaction', {
      url: '/transaction',
      templateUrl: 'app/components/session/transaction/transaction.html',
      controller: 'transactionController'
    })

    .state('merchant.transactionDetails', {
      url: '/transaction-details/:transactionId',
      templateUrl: 'app/components/session/transaction/transaction-details.html',
      controller: 'transactionDetailsController'
    })

    .state('merchant.signout', {
      url: '/signout',
      templateUrl: 'app/components/session/home/home.html',
      controller: 'signoutController'
    })
  // $locationProvider.html5Mode(true);

}]);