import React from 'react';
import PropTypes from 'prop-types';

import TermometrIcon from 'icons/thermometer.svg';
import Circle from './../Сircles/ColoredCircle';

const circleProps = {
  T: { maxValue: 30, minValue: -10, maxColor: 'f49441', minColor: '41b8f4' },
};

const Sensor = ({ name, value, type }) => (
  <Circle {...circleProps[type]} value={value}>
    <div className="sensor">
      <div className="sensor__value-container">
        <TermometrIcon className="sensor__icon" />
        <h1 className="sensor__value">{Math.round(value * 100) / 100}</h1>
      </div>
      <h3 className="sensor__name">{name}</h3>
    </div>
  </Circle>
);

Sensor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  type: PropTypes.oneOf(['T']),
};

Sensor.defaultProps = {
  value: 0,
  type: 'T',
};

export default Sensor;
