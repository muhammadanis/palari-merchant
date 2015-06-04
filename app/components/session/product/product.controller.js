phinisiApp.controller('addProductController', function($scope, $http){
	$scope.productDetails = {
		product_name: '',
		product_description: '',
		product_price: '',
		product_image: '',
		product_weight: '',
		product_insurance: ''
	}

	$scope.enableShipping = false;

})