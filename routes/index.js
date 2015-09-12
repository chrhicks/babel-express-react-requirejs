/*global module, require, __dirname*/
'use strict';

// Environment
var path = require('path');
var root = path.join(__dirname, '..');

// Express
var router = require('express').Router();

// React
var React = require('react/addons');
var button = require(root + '/public/js/components/button');

var buttonComponent = React.createFactory(button);

router.get('/', function indexRoute (req, res) {
  var buttonHtml = React.renderToString(buttonComponent({ children: 'The Index Button!'}));
  res.render('index', { buttonHtml: buttonHtml });
});

module.exports = router;
