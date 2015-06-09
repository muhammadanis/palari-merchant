phinisiApp.controller('transactionController', ['$scope' , '$http' , '$log' , '$window' , '$state' ,'$stateParams' , 
	function($scope, $http, $log, $window, $state, $stateParams){
		$scope.transactionType = 0;
		$scope.transactions = {};
		$scope.shipping = !false;
		$scope.confirm = false;
		$scope.cancel = false;
		$scope.getTransactionList = function(){

		}
		$scope.confirmToggle = function(){
			$scope.confirm = !$scope.confirm;
		}
		$scope.cancleToggle = function(){
			$scope.cancel = !$scope.cancel;
		}
		$scope.confirmOrder = function(){
			$scope.confirm = !$scope.confirm;
			$state.transitionTo('merchant.transaction', {arg : 'arg'});	
		}
		$scope.cancelOrder = function(){
			$scope.cancel = !$scope.cancel;
			$state.transitionTo('merchant.transaction', {arg : 'arg'});
		}
}]);

	