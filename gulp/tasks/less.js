/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require: true*/

'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function() {
  gulp.src('public/css/*.less')
  .pipe(sourcemaps.init())
  .pipe(less({
    paths: ['public/css'],
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/css/dist'));
});


