'use strict';

describe('register module', function(){

	var registerController;
	var scope;
	beforeEach(module('registerApp'));
	beforeEach(inject(function($controller,$rootScope){
		scope = $rootScope.$new();
		registerController = $controller('registerController', {$scope : scope});	

	}));

	describe('register controller', function(){
		it("should pass", function(){
			expect(registerController).toBeDefined();
		});
	});
});