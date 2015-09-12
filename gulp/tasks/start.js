/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require: true*/

'use strict';

var gulp = require('gulp');
var gulpNodemon = require('gulp-nodemon');


gulp.task('start', function () {
  gulpNodemon({
    script: 'server.js',
    watch: [
      'public/templates/',
      'routes/',
      'lib/',
      'server.js'
    ],
    ext: 'hbs js',
    env: { 'NODE_ENV': 'development' }
  });
});
