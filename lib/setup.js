/*jshint globalstrict: true*/
/*global module, process, require, __dirname*/
'use strict';

var path = require('path');
var root = path.join(__dirname, '..');

var express = require('express');
var hbs = require('hbs');

var port = 5680;

module.exports = function expressAppSetup (app) {
  app.set('port', (process.env.PORT || port));
  app.set('view engine', 'hbs');
  app.set('views', path.join(root, 'public/templates'));
  app.set('view options', { layout: 'layouts/default.hbs' });
  app.use(express.static(path.join(root, 'public')));

  // Register Template Partials

  hbs.registerPartials(path.join(root, 'public/templates/partials'));

  //  Handlebars Helpers

  var blocks = {};

  hbs.registerHelper('extend', function(name, context) {
    var block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }

    block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
  });

  hbs.registerHelper('block', function(name) {
    var val = (blocks[name] || []).join('\n');
    // clear the block
    blocks[name] = [];
    return val;
  });

  hbs.registerHelper('json', function(context) {
    return JSON.stringify(context);
  });

  return app;
};
