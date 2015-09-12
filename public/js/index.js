/*global define*/
'use strict';

define(['react', 'components/button'], function (React, Button) {
  function init() {
    React.render(React.createElement(
      Button,
      null,
      'The Index Button!'
    ), document.getElementById('main-content'));
  }

  return {
    init: init
  };
});