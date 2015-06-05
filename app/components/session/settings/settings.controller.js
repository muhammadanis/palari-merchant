phinisiApp.controller('accessKeyController', function($scope){
	$scope.sandbox = {
		server_key: '',
		client_key: ''
	}

})

phinisiApp.controller('changePasswordController', function($scope){
	$scope.currentPassword = '';
	$scope.newPassword = '';
	$scope.confirmNewPassword = '';
})