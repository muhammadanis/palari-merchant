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
	$scope.product_list = [1,2,3];
	$scope.getProductList = function(){
		$http.post(
			//url
			phinisiEndpoint + '/merchant/product',
			//data
			{},
			//config
			{
				headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
			})
		.success(function(data,status,headers,config){
			if(data.success){
				if(data.success){
					$scope.product_list = data;
					$log.debug('Get product list success!');					
				}else{
					$scope.error = data.description;						
				}
			}
			$log.debug(data);			
		})
		.error(function(data,status,headers,config){
			$log.debug(data);
			$scope.error = data.error;				
		});
	}

	$scope.getProductList();
})