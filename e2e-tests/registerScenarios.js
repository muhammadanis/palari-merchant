'use strict';

describe('my app', function(){

	browser.get('index.html');

	it('should automatically redirect to /login when location is empty', function(){
		expect(browser.getLocationAbsUrl()).toMatch("/login");
	});
});