/*global require, __dirname*/

'use strict';

var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var requirejs = require('requirejs');
var root = path.join(__dirname, '../..');

var config = require(path.join(root, 'public/js/build.json'));

gulp.task('js:babel', function (done) {
  gulp.src('public/es/**/*.es')
    .pipe(babel())
    .pipe(gulp.dest('public/js'))
    .once('end', function () {
      done();
    });
});

gulp.task('js:optimize', ['js:babel'], function (done) {
  gutil.log(gutil.colors.cyan('Optimizing javascript using r.js ...'));
  requirejs.optimize(config, function optimizeSuccess (buildResponse) {
    gutil.log(gutil.colors.blue('    r.js Optimizer built modules'));
    gutil.log(gutil.colors.blue('======================================'));
    gutil.log('\n' + buildResponse);
    gutil.log(gutil.colors.blue('======================================'));
    done();
  }, function optimizeError (err) {
    gutil.log(gutil.colors.red('\n' + err));
  });
});

gulp.task('javascript', ['js:optimize']);
