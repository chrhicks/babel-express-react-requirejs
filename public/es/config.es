/*global requirejs */

requirejs.config({
  baseUrl: '/js',
  paths: {
    jquery: 'vendor/jquery/jquery',
    handlebars: 'vendor/handlebars/handlebars',
    react: 'vendor/react/react'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    handlebars : {
      exports: 'Handlebars'
    }
  }
});
