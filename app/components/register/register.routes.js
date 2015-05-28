routesApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('register', {
			url: '/register',
			templateUrl: 'app/components/register/register.html',			
		});
});