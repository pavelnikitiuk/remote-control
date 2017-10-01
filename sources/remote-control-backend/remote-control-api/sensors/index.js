const api = require('express').Router();
const { repositories } = require('remote-control-database');

const Base = require('../base/Base');

const { Sensor } = repositories;


class Sensors extends Base {
  get services() {
    return [
      {
        action: this.all,
      },
      // {
      //   action: this.add,
      //   method: 'post',
      // },
    ];
  }

  async all(req, res) {
    debugger;
    try {
      const recource = await this.recource.find();
      res.json(recource);
      res.statusCode = 200;
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

module.exports = new Sensors(api, Sensor, '/').app;

