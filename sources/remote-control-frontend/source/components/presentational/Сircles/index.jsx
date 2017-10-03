import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './circle.css';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: 0,
    };
    this.getChildRef = this.getChildRef.bind(this);
  }

  getChildRef(node) {
    this.node = node;
    return node;
  }

  render() {
    const { color, children } = this.props;
    let style = null;
    if (this.node) {
      const { clientWidth, clientHeight } = this.node;
      const radius = Math.max(clientHeight, clientWidth);
      style = {
        border: '6px solid',
        borderColor: color,
        boxShadow: `0 0 15px ${color}`,
        borderRadius: radius,
      };
    }

    return (
      <div style={style} ref={node => (this.node = node)} className="circle">
        {children}
      </div>
    );
  }
}

Circle.propTypes = {
  color: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Circle.defaultProps = {
  color: 'red',
};

export default Circle;
