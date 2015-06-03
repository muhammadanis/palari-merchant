routesApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('token', {
			url: '/token',
			templateUrl: 'app/components/token/token.html',
			controller: 'tokenController'
		});
});