'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
 
gulp.task('sass', function () {
  gulp.src('./app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css')) // this is what was missing
    .pipe(gulp.dest('./app/assets/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./app/**/*.scss', ['sass']);
});