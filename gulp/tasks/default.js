/*jshint esnext: true, laxcomma: true, eqeqeq: true, bitwise: true, curly: true, latedef: true, strict: true, plusplus: true*/
/*global require: true*/

'use strict';

var gulp = require('gulp');

gulp.task('default', ['watch', 'less', 'js:babel', 'start']);
