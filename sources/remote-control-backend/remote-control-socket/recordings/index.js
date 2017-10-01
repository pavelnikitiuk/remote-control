class Recordings {
  constructor(socket) {
    this.socket = socket;
  }

  emitTemperature(data) {
      this.socket.emit('recordings:temperature', data);
  }
}

module.exports = Recordings;
