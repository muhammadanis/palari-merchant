sessionApp.controller('transactionController', ['$scope' , '$http' , '$log' , '$window' , '$state' ,'$stateParams' , 
	function($scope, $http, $log, $window, $state, $stateParams){
		$scope.transactionType = 0;
		$scope.transactions = null;
		$scope.confirm = false;
		$scope.cancel = false;
		$scope.getTransactionList = function(){
			$http.post(
				//url
				phinisiEndpoint + '/merchant/transaction',
				//data
				{
				},
				//config
				{
					headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
				})
			.success(function(data,status,headers,config){
				if(data.hasOwnProperty('success')){
					$scope.error = data.description;
				}	
				else{
					$scope.transactions = data;
					$log.debug('Get transactions list success!');
					$log.debug($scope.transactions);
				}
			})
			.error(function(data,status,headers,config){
				$log.debug(data);
				$scope.error = data.error;				
			});
		};
		$scope.confirmToggle = function(){
			$scope.confirm = !$scope.confirm;
		};
		$scope.cancleToggle = function(){
			$scope.cancel = !$scope.cancel;
		};
		$scope.confirmOrder = function(){
			$scope.confirm = !$scope.confirm;
			$state.transitionTo('merchant.transaction', {arg : 'arg'});	
		};
		$scope.cancelOrder = function(){
			$scope.cancel = !$scope.cancel;
			$state.transitionTo('merchant.transaction', {arg : 'arg'});
		};
}]);

sessionApp.controller('transactionDetailsController', ['$scope' , '$http' , '$log' , '$window' , '$state' ,'$stateParams' , 
	function($scope, $http, $log, $window, $state, $stateParams){
		$scope.shipping = false;
		$scope.transactionId = $stateParams.transactionId;
		$scope.transaction = '';
		$scope.getTransactionDetails = function(){
			$http.post(
				//url
				phinisiEndpoint + '/merchant/transaction/detail',
				//data
				{
					transaction_id : $scope.transactionId,
				},
				//config
				{
					headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
				})
			.success(function(data,status,headers,config){
				if(data.hasOwnProperty('transaction_id')){
					$scope.transaction = data;
					$log.debug('Get transactions details success!');
					$log.debug($scope.transaction);
				}	
				else{
					$scope.error = data.description;
				}
			})
			.error(function(data,status,headers,config){
				$log.debug(data);
				$scope.error = data.error;				
			});
		};

		$scope.totalAmount = function(){
			var total = 0;
			for(i in $scope.transaction.transaction_detail){
				total += $scope.transaction.transaction_detail[i].item_price * $scope.transaction.transaction_detail[i].item_quantity;
			}
			return total;
		}
}]);

	