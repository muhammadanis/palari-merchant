phinisiApp.controller('addProductController', ['$scope' , '$http' , '$log' , '$window' , '$stateParams' , function($scope, $http, $log, $window, $stateParams){
	$scope.productDetails = {
		name: 'product1',
		description: 'description',
		price: '1',
		image: '',
		weight: '1',
		insurance: '1'
	}	
	$scope.enableShipping = false;
	$scope.merchantProduct = {
		merchant_id : '',
		merchant_product: {}
	};

	$scope.getProductList = function(){
		$log.debug($window.sessionStorage.token);
		$http.post(
			//url
			phinisiEndpoint + '/merchant/product',
			//data
			{
			},
			//config
			{
				headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
			})
		.success(function(data,status,headers,config){
			if(data.hasOwnProperty('merchant_id')){
				$scope.merchantProduct.merchant_id = data.merchant_id;
				$scope.merchantProduct.merchant_product = data.merchant_product; 
				$log.debug('Get product list success!');
				$log.debug($scope.merchantProduct);
			}	
			else{
				$scope.error = data.description;
			}
		})
		.error(function(data,status,headers,config){
			$log.debug(data);
			$scope.error = data.error;				
		});
	}

	$scope.submitProduct = function(){
		$log.debug($scope.productDetails.name);
		$log.debug($scope.productDetails.description);
		$log.debug($scope.productDetails.price);
		$log.debug($scope.productDetails.image);
		$log.debug($scope.productDetails.weight);
		$log.debug($scope.productDetails.insurance);

		if(!$scope.enableShipping){
			$scope.productDetails.weight =0;
			$scope.productDetails.insurance = 0;
		}

		$http.post(
			//url
			phinisiEndpoint + '/merchant/product/new',
			$scope.productDetails,
			{
				headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,	
			})
		.success(function(data,status,headers,config){
			$log.debug(data);
			if(data.success){
				$log.debug("success save product");
			}else{
				$scope.error = data.description;
			}				
		})
		.error(function(data,status,headers,config){
			$log.debug(data);
			$scope.error = data.error;			
		});		
	};

}]);

phinisiApp.controller('productDetailsController', ['$scope' , '$http' , '$log' , '$state' , '$stateParams' , function($scope, $http, $log, $state, $stateParams){
	$scope.productDetails = {};
	$scope.deletePopUp = false;
	$scope.choosenProduct = $stateParams.productId;
	$scope.getProductDetails = function(){
		$log.debug($scope.choosenProduct);
		$http.post(
			//url
			phinisiEndpoint + '/merchant/product/detail',
			//data
			{
				id: $scope.choosenProduct,
			},
			//config
			{
				headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
			})
		.success(function(data,status,headers,config){
			if(!data.hasOwnProperty('merchant_id')){
				$scope.productDetails = data;
				$log.debug("Get product details success");
			}
			else{
				$scope.error = data.success;
			}
		})
		.error(function(data,status,headers,config){
			$log.debug(data);
			$scope.error = data.error;				
		});
	};
	$scope.deleteToggle = function(){
		$scope.deletePopUp = !$scope.deletePopUp;
	}
	$scope.deleteProduct = function(){
		$scope.deletePopUp = !$scope.deletePopUp;
		$state.transitionTo('merchant.product', {arg : 'arg'});	
	};

	$scope.updateProduct = function(){
		$scope.productDetails.id = $scope.choosenProduct;
		$log.debug($scope.productDetails);
		$http.post(
			//url
			phinisiEndpoint + '/merchant/product/update',
			$scope.productDetails,
			{
				headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,	
			})
		.success(function(data,status,headers,config){
			$log.debug(data);
			if(data.hasOwnProperty('name')){
				$log.debug("success update product");
				$state.transitionTo('merchant.productDetails', {productId: $scope.choosenProduct});
			}else{
				$scope.error = data.description;
			}				
		})
		.error(function(data,status,headers,config){
			$log.debug(data);
			$scope.error = data.error;			
		});	
	};
}]);

	
