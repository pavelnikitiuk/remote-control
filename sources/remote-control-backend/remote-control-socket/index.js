const io = require('socket.io');

const Records = require('./recordings');

class Socket {
  constructor(io) {
    this._socket = {};
    this.io = io;
    this.initialize = this.initialize.bind(this);
  }
  initialize(server) {
    this._socket = this.io(server);
    this.recordings = new Records(this._socket);
  }
}

module.exports = new Socket(io);
