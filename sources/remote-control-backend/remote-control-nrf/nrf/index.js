const EventEmitter = require('events');

class Nrf {
  constructor(gpio1 = 25, gpio2 = 0, gpio3 = 32) {
    const nrfMesh = require('node-rf24-mesh');
    this._nrf = new nrfMesh(gpio1, gpio2, gpio3);
  }

  addListener(cb) {
    this._nrf.listen(cb);
  }
}

class NrfMock extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('onDataReceived', {
        messageType: 'T',
        temperature: Date.now() % 100,
      });
    }, 1000);
  }
}
let nrf;
if (process.env.DO_NOT_USE_NRF) {
  nrf = new NrfMock();
} else {
  nrf = new Nrf(25, 0, 32);
}

module.exports = nrf;
