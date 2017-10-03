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

  componentDidMount() {
    const { node } = this;
    const { clientWidth, clientHeight } = node;
    this.setState(() => ({ radius: Math.max(clientHeight, clientWidth) + 40 }));
  }

  getChildRef(node) {
    this.node = node;
    return node;
  }

  render() {
    const { color, children } = this.props;
    const { radius } = this.state;
    return (
      <div
        ref={node => (this.node = node)}
        className="circle"
        style={{
          borderColor: color,
          boxShadow: `0 0 15px ${color}`,
          borderRadius: radius,
          width: radius || null,
          height: radius || null,
        }}
      >
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
