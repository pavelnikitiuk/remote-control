const io = require('socket.io');

class Socket {
  constructor() {
    this._socket = {};
  }
  initialize(server) {
    this._socket = io(server);
  }
  emitTemp(data) {
    try {
      this._socket.emit('temperature', data);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new Socket();
