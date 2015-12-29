'use strict';

var SplashScreen    = require('../pages/SplashScreen.js');

describe('DinnerBell: SplashScreen', function() {

  var splashScreen   = new SplashScreen();

  beforeEach(function() {
    splashScreen.load();
  });

  it('should have a button that says "Lets Eat"', function() {
    expect(splashScreen.getButton().isPresent()).toBeTruthy();
  });

});
