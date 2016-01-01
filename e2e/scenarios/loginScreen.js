'use strict';

var LoginScreen    = require('../pages/LoginScreen.js');

describe('LoginScreen: ', function() {

	var loginScreen   = new LoginScreen();

	beforeEach(function() {
		loginScreen.load();
	});

	describe('When the Login screen loads', function() {

		it('should have the application logo.', function() {
			expect(loginScreen.getLogo().isPresent()).toBeTruthy();
		});

		it('should have the fields present for a user to login with a local account.', function() {
			expect(loginScreen.getEmailField().isPresent()).toBeTruthy();
			expect(loginScreen.getPasswordField().isPresent()).toBeTruthy();
			expect(loginScreen.getLoginButton().isPresent()).toBeTruthy();
		});

		it('should have single signon buttons', function() {
			expect(loginScreen.getGoogleLoginButton().isPresent()).toBeTruthy();
			expect(loginScreen.getFacebookLoginButton().isPresent()).toBeTruthy();
			expect(loginScreen.getTwitterLoginButton().isPresent()).toBeTruthy();
		});

		it('should allow the user to signup for an account if they dont already have an account', function() {
			expect(loginScreen.getRegisterLink().isPresent()).toBeTruthy();
		});
	});

});
