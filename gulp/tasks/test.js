/*global require, process*/

'use strict';

var gulp = require('gulp');

process.env.NODE_ENV = process.env.NODE_ENV || 'test';

gulp.task('watch-test', function watchTask () {
  gulp.watch(['test/**/*.js'], ['test']);
});

gulp.task('test', ['watch-test', 'run-tests']);