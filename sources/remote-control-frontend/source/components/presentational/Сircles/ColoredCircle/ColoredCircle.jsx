import React from 'react';
import PropTypes from 'prop-types';

import Circle from '..';

function calculateColor(ratio, color1, color2) {
  const hex = function hex(x) {
    const str = x.toString(16);
    return str.length === 1 ? `0${x}` : str;
  };

  const r = Math.ceil(
    parseInt(color1.substring(0, 2), 16) * ratio +
      parseInt(color2.substring(0, 2), 16) * (1 - ratio),
  );
  const g = Math.ceil(
    parseInt(color1.substring(2, 4), 16) * ratio +
      parseInt(color2.substring(2, 4), 16) * (1 - ratio),
  );
  const b = Math.ceil(
    parseInt(color1.substring(4, 6), 16) * ratio +
      parseInt(color2.substring(4, 6), 16) * (1 - ratio),
  );

  return hex(r) + hex(g) + hex(b);
}

const ColoredCircle = ({ maxColor, minColor, maxValue, minValue, value, children }) => {
  const max = Math.abs(minValue) + Math.abs(maxValue);
  const v = value + Math.abs(minValue);

  const color = `#${calculateColor(v / max, maxColor, minColor)}`;
  return <Circle color={color}>{children}</Circle>;
};

ColoredCircle.propTypes = {
  maxColor: PropTypes.string.isRequired,
  minColor: PropTypes.string.isRequired,
  maxValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

export default ColoredCircle;
