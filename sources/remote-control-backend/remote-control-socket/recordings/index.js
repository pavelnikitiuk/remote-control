class Records {
  constructor(socket) {
    this.socket = socket;
  }

  emitTemperature(data) {
    const payload = {
      id: data.fromNode,
      type: data.messageType,
      value: data.temperature,
    };
    this.socket.emit('recordings:temperature', payload);
  }
}

module.exports = Records;
