var SplashScreen = function() {

  this.load = function() {
    return browser.get("/#");
  };

  this.getButton = function() {
    // @Todo - remove sleep() when https://github.com/angular/protractor/issues/2154
    browser.sleep(500);

    return element(by.css('.eatButton'));
  };

};

module.exports = SplashScreen;

