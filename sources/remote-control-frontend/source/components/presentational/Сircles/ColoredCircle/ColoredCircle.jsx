import React from 'react';

import Circle from '..';

function calculateColor() {
  const color1 = 'FF0000';
  const color2 = '00FF00';
  const ratio = 0.5;
  const hex = function hex(x) {
    const stirng = x.toString(16);
    return stirng.length === 1 ? `0${x}` : x;
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

  return (hex(r) + hex(g) + hex(b)).toString();
}

const ColoredCircle = () => {};
