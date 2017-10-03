import React from 'react';
import PropTypes from 'prop-types';

import Sensor from 'components/presentational/Sensor';
import Section from 'components/presentational/Section';

const Sensors = ({ sensors }) => (
  <Section header="Climate">
    {sensors.map(sensor => <Sensor key={sensor.id} {...sensor} />)}
  </Section>
);

Sensors.propTypes = {
  sensors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number,
    }),
  ).isRequired,
};

export default Sensors;
