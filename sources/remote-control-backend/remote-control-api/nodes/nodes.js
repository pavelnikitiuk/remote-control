const api = require('express').Router();

const Base = require('../base/Base');

class Nodes extends Base {
  getResource(resources) {
    return resources.Node;
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
    const { description, id } = req.body;
    await this.resource(res).add({
      description,
      _id: id,
      sensors: [],
      switchers: [],
    });
    res.send(200);
  }
}

module.exports = new Nodes(api, '/').app;
