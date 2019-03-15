const EventEmitter = require('events');
const { logger } = require('remote-control-services');

const nrf24 = require('nrf24');

class Nrf extends EventEmitter {
  constructor(models) {
    super();
    const rf24 = new nrf24.nRF24(25, 0);
    this.mesh = new nrf24.nRF24Mesh(rf24, false);

    this.send = this.send.bind(this);

    this.models = models.map((Model) => {
      const model = new Model();
      this.mesh.filter(model.type, model.maxLength);
      return model;
    });
  }

  start() {
    this.mesh.begin(0);
    this.mesh.onRcv(
        (header, data) => {
          const model = this.models.find(
              ({ type }) => header.type === parseInt(type, 16)
          );
          if (!model) {
            logger.warn('cant find model for type ', header.type);
            return;
          }
          this.emit('onDataReceived', model.getModel(header, data));
        },
        (...args) => logger.error(...args)
    );
  }

  send(command) {
    this.mesh.send(command.type, command.payload, command.node);
  }
}
module.exports = Nrf;
