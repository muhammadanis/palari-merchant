phinisiApp.controller('detailsController', ['$scope', '$http', '$window', '$log', 
	function($scope, $http, $window, $log){
		$scope.storeDetails = {
			store_name: '',
			store_logo: '',
			phone_number: '',
			address: '',
			province: '',
			city: ''
		}
		$scope.provinces = [{id:1, name:'Jawa Barat'}, {id:2, name: 'Banten'}];
		$scope.cities = [{provinceId: 1, cityId: 1, name:'Bandung'}, {provinceId: 1, cityId: 2, name:'Bogor'}, {provinceId: 2, cityId: 3, name:'Tangerang'},];
		$scope.$log = $log;

		$scope.submit = function(){
				//get store details from model
				console.log($window.sessionStorage.token);
				console.log($scope.storeDetails);
				$http.post(
					//url
					phinisiEndpoint + '/merchant/info/create',
					//data
					{
					  token: $window.sessionStorage.token, 
					  merchant_details: {
					  	merchant_name : $scope.storeDetails.store_name, 
					  	merchant_logo_url : $scope.storeDetails.store_logo
					  }, 
					  merchant_address: {
					      city_id : $scope.storeDetails.city, 
					      address : $scope.storeDetails.address, 
					      phone_number : $scope.storeDetails.phone_number
					  }
					},
					//config
					{
						headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
					})
				.success(function(data,status,headers,config){
					if(data.success){
						if(data.success){
							console.log('Create store success!');					
						}else{
							$scope.error = data.description;						
						}
					}
					console.log(data);			
				})
				.error(function(data,status,headers,config){
					console.log(data);
					$scope.error = data.error;				
				});
			};
	}])
