/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require: true*/

'use strict';

var gulp = require('gulp');

gulp.task('watch', function watchTask () {
  gulp.watch(['public/css/**/*.less'], ['less']);
  gulp.watch(['public/es/**/*.es'], ['js:babel']);
});
