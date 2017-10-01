const api = require('express').Router();
const { repositories } = require('remote-control-database');

const Base = require('../base/Base');

const { DeviceRecord } = repositories;


class Devices extends Base {
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
    /* eslint-disable */
    debugger;
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

module.exports = new Devices(api, DeviceRecord, '/').app;

