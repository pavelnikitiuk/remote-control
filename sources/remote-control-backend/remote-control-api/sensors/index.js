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

  async all(req, res) {
    try {
      const resources = await this.resource(res).find();
      res.json(resources);
      res.statusCode = 200;
    } catch (e) {
      res.status(500).send(e);
    }
  }

  async add(req, res) {
    const { type, id } = req.body;
    this.resource.add({mType: type, _id: id});
    res.send(200);
  }
}

module.exports = new Sensors(api, '/').app;
