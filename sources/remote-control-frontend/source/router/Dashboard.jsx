import React from 'react';
import Sensors from 'containers/Sensors';
import Socket from 'containers/Socket';

const Dashboard = () => [
  <Sensors key="sensors" />,
  <Socket key="socket" />,
];

export default Dashboard;
