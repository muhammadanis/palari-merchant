routesApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('create-merchant', {
			url: '/create-merchant',
			templateUrl: 'app/components/create-merchant/create-merchant.html',
			controller: 'createMerchantController'
		});
});