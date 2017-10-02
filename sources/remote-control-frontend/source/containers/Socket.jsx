import { Component } from 'react';
import { connect } from 'react-redux';

import socket from 'services/socket';

import { updateTemperature } from 'actions/socket';

/* eslint-disable react/prop-types */

class Socket extends Component {
  componentDidMount() {
    this.subscribe();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  get mapMessageToAction() {
    return {
      'recordings:temperature': this.props.updateTemperature,
    };
  }

  unsubscribe() {
    this.processWithEvents(message => socket.removeEventListener(message));
  }

  subscribe() {
    const { mapMessageToAction } = this;
    this.processWithEvents(message => socket.on(message, mapMessageToAction[message]));
  }

  processWithEvents(cb) {
    const { mapMessageToAction } = this;
    Object.keys(mapMessageToAction).forEach((message) => {
      cb(message);
    });
  }

  render() {
    return null;
  }
}

const mapStateToActions = {
  updateTemperature,
};

export default connect(null, mapStateToActions)(Socket);
