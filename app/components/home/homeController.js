var merchantApp = angular.module("merchantApp", ["ngAnimate"])

merchantApp.controller('detailsController', function($scope, $http){
	$scope.storeDetails = {
		store_name: '',
		store_logo: '',
		phone_number: '',
		address: '',
		province: 'Select your province...',
		city: 'Select your city...'
	}

	$scope.provinces = [ 'Jawa Barat', 'Jakarta', 'Sumatera Utara' ];

	$scope.city = [ 'tes' ]


})
