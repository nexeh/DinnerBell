'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var http = require('http');
var express = require('express');
var server = http.createServer(express().use(express.static(__dirname + '/app/')));
var protractor = require("gulp-protractor").protractor;
 
gulp.task('sass', function () {
  gulp.src('./app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css')) 
    .pipe(gulp.dest('./app/assets/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./app/**/*.scss', ['sass']);
});

gulp.task('e2etests:run', ['e2etests:server'], function(cb) {

	console.log('SERVER: ', server.address());
	gulp.src(["./src/e2e/**/*.js"])
	    .pipe(protractor({
	        configFile: "e2e/protractor.conf.js",
	        args: ['--baseUrl', 'http://localhost:' + server.address().port]
	    }))
	    .on('error', function(e) {
			server.close();
			if(isCI) {
				throw e;
			} else {
				console.log(e);
			}
			cb();
		}).on('end', function() {
			server.close();
			cb();
		});
});

// Download and update the selenium driver
//gulp.task('e2etests:webdriver_manager_update', gp.webdriver_update);

gulp.task('e2etests:server', function(cb) {
	server.listen(9001, cb);
});