const nrfMesh = require('node-rf24-mesh');

class Nrf {
  constructor(gpio1 = 25, gpio2 = 0, gpio3 = 32) {
    console.log(112);
    this._nrf = new nrfMesh(gpio1, gpio2, gpio3);
  }

  addListener(cb) {
    this._nrf.listen(cb);
  }
}

module.exports = new Nrf(25, 0, 32);

