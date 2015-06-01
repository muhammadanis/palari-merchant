routesApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'app/components/login/login.html',
			controller: 'loginController'
		});
});