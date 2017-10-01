import React from 'react';
import PropTypes from 'prop-types';

const Sensor = ({ name, value }) => (
  <div>
    <h1>{name}</h1>
    <h3>{value}</h3>
  </div>
);

Sensor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Sensor;
