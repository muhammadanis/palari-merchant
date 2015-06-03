routesApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('create-merchant', {
			url: '/merchant',
			templateUrl: 'app/components/merchant/create-merchant.html',
			controller: 'merchantController'
		});
});