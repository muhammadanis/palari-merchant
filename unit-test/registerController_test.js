'use strict';

describe('register module', function(){

	var registerController;
	var scope;
	var http;
	beforeEach(module('registerApp'));
	beforeEach(inject(function($controller,$rootScope, $http){
		scope = $rootScope.$new();
		http = $http;
		registerController = $controller('registerController', {$scope : scope, $http : http});	

	}));

	describe('> register controller', function(){
		it("should pass", function(){
			expect(registerController).toBeDefined();
		});
	});

	describe('> register with new account', function(){
		it('> register should success', function(){
			var randomEmail = makeId(10) + "@gmail.com";
			scope.regModel.username = randomEmail;
			scope.regModel.password = makeId(9);

			expect(scope.isModelValid()).toBe(true);

			//test register
			scope.register(function(data,status,headers,config){
				//it should success
				expect(true).toBe(true);
			}, function(data,status,headers,config){
				//it should fail
				expect(false).toBe(true);
			});

		});
	});

	describe('> register with existing account', function(){
		it('> register should fail', function(){
			var email = "anisiconic@gmail.com";
			scope.regModel.username = email;
			scope.regModel.password = "pass";

			expect(scope.isModelValid()).toBe(true);

			//test register
			scope.register(function(data,status,headers,config){
				//it should fail
				expect(false).toBe(true);
			}, function(data,status,headers,config){
				//it should success
				expect(true).toBe(true);
			});
		});
	});
});

function makeId(length){
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}