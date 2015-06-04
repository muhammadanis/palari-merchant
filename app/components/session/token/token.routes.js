routesApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('token', {
			url: '/token',
			templateUrl: 'app/components/session/token/token.html',
			controller: 'tokenController'
		});
});