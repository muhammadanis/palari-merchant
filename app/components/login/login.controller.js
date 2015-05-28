var loginApp = angular.module('loginApp', ['ngAnimate']);

loginApp.config(function($sceDelegateProvider, $httpProvider) {
	$sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://api.sandbox.veritrans.co.id/v2/**'
	]);
});



