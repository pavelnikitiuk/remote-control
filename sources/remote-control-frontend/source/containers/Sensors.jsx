import React from 'react';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';

import { sensors } from 'selectors/collections';

import { requestSensors } from 'actions/sensors';

import Sensors from 'components/Sensors';

const SensorsContainer = ({ sensors }) => <Sensors sensors={sensors} />;

const withLifecycle = lifecycle(
  {
    componentDidMount() {
      const { requestSensors } = this.props;
      requestSensors();
    },
  },
)(SensorsContainer);

const mapStateToProps = state => ({
  sensors: sensors(state),
});

const mapStateToActions = {
  requestSensors,
};

const withConnect = connect(mapStateToProps, mapStateToActions)(withLifecycle);

export default withConnect;

