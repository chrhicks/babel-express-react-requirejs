/*global define*/
'use strict';

define(['react', 'components/button'], function (React, Button) {
  function init () {
    React.render(<Button>The Index Button!</Button>, document.getElementById('main-content'));
  }

  return {
    init: init
  };
});
