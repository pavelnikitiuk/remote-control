const io = require('socket.io');

const Recordings = require('./recordings');

class Socket {
  constructor(io) {
    this._socket = {};
    this.io = io;
    this.initialize = this.initialize.bind(this);
  }
  initialize(server) {
    this._socket = this.io(server);
    this.recordings = new Recordings(this._socket);
  }
}

module.exports = new Socket(io);
