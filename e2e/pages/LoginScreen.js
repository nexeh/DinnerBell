var LoginScreen = function() {

	this.load = function() {
		return browser.get("/#login");
	};

	this.getLoginButton = function() {
		// @Todo - remove sleep() when https://github.com/angular/protractor/issues/2154
		browser.sleep(500);

		return element(by.css('.loginButton'));
	};

	this.getGoogleLoginButton = function() {
		// @Todo - remove sleep() when https://github.com/angular/protractor/issues/2154
		browser.sleep(500);

		return element(by.css('.loginGooleButton'));
	};

	this.getFacebookLoginButton = function() {
		// @Todo - remove sleep() when https://github.com/angular/protractor/issues/2154
		browser.sleep(500);

		return element(by.css('.loginFacebookButton'));
	};

	this.getTwitterLoginButton = function() {
		// @Todo - remove sleep() when https://github.com/angular/protractor/issues/2154
		browser.sleep(500);

		return element(by.css('.loginTwitterButton'));
	};

	this.getEmailField = function() {
		return element(by.css('.emailField'));
	};

	this.getPasswordField = function() {
		return element(by.css('.emailField'));
	};

	this.getRegisterLink = function() {
		return element(by.css('.register'));
	};

	this.getLogo = function() {
		return element(by.css('.logo'));
	};

};

module.exports = LoginScreen;

