import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { increment, decrement } from 'actions/counter';

const Counter = ({ count, increment, decrement }) => (
  <section>
    <h1>{count}</h1>
    <button key="increment" onClick={() => increment()}>
      Increase
    </button>
    <button key="decrement" onClick={() => decrement()}>
      Decrease
    </button>
  </section>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state.getIn(['counter', 'count']),
});

const mapPropsToActions = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapPropsToActions)(Counter);
