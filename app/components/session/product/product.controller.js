phinisiApp.controller('productController', ['$scope' , '$http' , '$log' , '$window' , function($scope, $http, $log, $window){
	$scope.productDetails = {
		product_name: 'product1',
		product_description: 'description',
		product_price: '1',
		product_image: '',
		product_weight: '1',
		product_insurance: '1'
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

	$scope.getProductList();

	$scope.submitProduct = function(){
		$log.debug($scope.productDetails.product_name);
		$log.debug($scope.productDetails.product_description);
		$log.debug($scope.productDetails.product_price);
		$log.debug($scope.productDetails.product_image);
		$log.debug($scope.productDetails.product_weight);
		$log.debug($scope.productDetails.product_insurance);

		if(!$scope.enableShipping){
			$scope.productDetails.product_weight =0;
			$scope.productDetails.product_insurance = 0;
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
