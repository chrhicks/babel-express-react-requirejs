/*global define*/
'use strict';

function ButtonComponent (React) {
  return React.createClass({
    handleClick: function () {
      console.log('You clicked the button!');
    },

    render: function () {
      return (
        <button className="button button-primary col-2" onClick={this.handleClick}>{this.props.children}</button>
      );
    }
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ButtonComponent(require('react'));
} else {
  define(['react'], ButtonComponent);
}

