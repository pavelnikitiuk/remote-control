const EventEmitter = require('events');
const TemperatureModel = require('./models/temperature');
const Nrf = require('./nrf');

class NrfMock extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('onDataReceived', {
        messageType: 'T',
        temperature: Date.now() % 100,
        fromNode: Date.now() % 10,
        sensorId: 1,
      });
    }, 1000);
  }
}
let nrf;
if (process.env.DO_NOT_USE_NRF) {
  nrf = new NrfMock();
} else {
  nrf = new Nrf([TemperatureModel]);
}

module.exports = nrf;
