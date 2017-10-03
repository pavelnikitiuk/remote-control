import React from 'react';
import PropTypes from 'prop-types';

import Circle from './../Сircles/ColoredCircle';

const Sensor = ({ name, value }) => (
  <Circle
    maxValue={30}
    minValue={-10}
    maxColor="f49441"
    minColor="41b8f4"
    value={value}
  >
    <div className="sensor">
      <h1 className="sensor__value">{Math.round(value * 100) / 100}</h1>
      <h3 className="sensor__name">{name}</h3>
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
