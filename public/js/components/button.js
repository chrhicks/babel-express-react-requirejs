/*global define*/
'use strict';

function ButtonComponent(React) {
  return React.createClass({
    handleClick: function handleClick() {
      console.log('You clicked the button!');
    },

    render: function render() {
      return React.createElement(
        'button',
        { className: 'button button-primary col-2', onClick: this.handleClick },
        this.props.children
      );
    }
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ButtonComponent(require('react'));
} else {
  define(['react'], ButtonComponent);
}