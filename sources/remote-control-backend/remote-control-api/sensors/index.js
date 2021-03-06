const api = require('express').Router();

const Base = require('../base/Base');


class Sensors extends Base {
  getResource(resources) {
    return resources.Sensor;
  }

  get services() {
    return [
      {
        action: this.all,
      },
      {
        action: this.add,
        method: 'post',
      },
    ];
  }

  async add(req, res) {
    const { type, id, node } = req.body;
    await this.resource(res).add({mType: type, _id: id, node});
    res.send(200);
  }
}

module.exports = new Sensors(api, '/').app;
