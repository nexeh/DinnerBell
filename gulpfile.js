'use strict';

var configuration = {
	buildDir: 'build'
};
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var http = require('http');
var express = require('express');
var server = http.createServer(express().use(express.static(__dirname + '/' + configuration.buildDir + '/')));
var protractor = require("gulp-protractor").protractor;
var useref = require('gulp-useref');
var clean = require('gulp-clean');
var templateCache = require('gulp-angular-templatecache');
var addStream = require('add-stream');
var includeSources = require('gulp-include-source')
 
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

	gulp.src(["./src/e2e/**/*.js"])
	    .pipe(protractor({
	        configFile: "e2e/protractor.conf.js",
	        args: ['--baseUrl', 'http://localhost:' + server.address().port]
	    }))
	    .on('error', function(e) {
			server.close();
			console.log(e);
			cb();
		}).on('end', function() {
			server.close();
			cb();
		});
});

// Download and update the selenium driver
//gulp.task('e2etests:webdriver_manager_update', gp.webdriver_update);

gulp.task('e2etests:server', ['sass'], function(cb) {
	server.listen(9001, cb);
});

gulp.task('build', ['build:clean', 'build:assets', 'build:html', 'build:templatecache'], function () {
    return;
});

gulp.task('build:html', [], function () {

    return gulp.src('app/index.html')
    	.pipe( includeSources() )
        .pipe(useref())
        .pipe(gulp.dest(configuration.buildDir));
});

gulp.task('build:templatecache', ['build:clean', 'build:html'], function () {
	
	return gulp.src('./' + configuration.buildDir + '/assets/dinnerbell.js')
		.pipe(addStream.obj(
			gulp.src('./**/*.tmpl.html')
    		.pipe(templateCache({
    			transformUrl: function(url) {
					return url.replace(/app\//, '')
				}
    		}))))
	    .pipe(concat('dinnerbell.js')) 
	    .pipe(gulp.dest('./' + configuration.buildDir + '/assets/'));
});

gulp.task('build:assets', [], function () {
	return gulp.src('app/assets/**/*.{png,gif,jpg,svg}')
		.pipe(gulp.dest('./' + configuration.buildDir + '/assets/'))
});

gulp.task('build:clean', [], function () {
	return gulp.src(configuration.buildDir, {read: false})
		.pipe(clean());
});