import React from 'react';
import PropTypes from 'prop-types';

import Sensor from 'components/presentational/Sensor';
import Section from 'components/presentational/Section';

const Sensors = ({ sensors }) => <Section>{sensors.map(sensor => <Sensor {...sensor} />)}</Section>;

Sensors.propTypes = {
  sensors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
};

export default Sensors;
