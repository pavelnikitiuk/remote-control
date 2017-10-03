import React from 'react';
import PropTypes from 'prop-types';

import Circle from './../Сircles/ColoredCircle';

import TermometrIcon from 'icons/thermometer.svg';

const Sensor = ({ name, value }) => (
  <Circle maxValue={30} minValue={-10} maxColor="f49441" minColor="41b8f4" value={value}>
    <div className="sensor">
      <div className="sensor__value-container">
        <TermometrIcon width={40} height={40} />
        <h1 className="sensor__value">{Math.round(value * 100) / 100}</h1>
      </div>
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
