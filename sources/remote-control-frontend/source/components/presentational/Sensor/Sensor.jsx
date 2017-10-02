import React from 'react';
import PropTypes from 'prop-types';

import Circle from './../Сircles';

const Sensor = ({ name, value }) => (
  <Circle>
    <div>
      <h1>{name}</h1>
      <h3>{value}</h3>
    </div>
  </Circle>
);

Sensor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
};

Sensor.defaultProps = {
  value: 0,
};

export default Sensor;
