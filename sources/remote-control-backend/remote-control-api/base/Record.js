const Base = require('./Base');

class Record extends Base {
  get services() {
    return [
      {
        action: this.all,
      },
      {
        action: this.bySensorId,
        route: '/sensor/:id',
      },
    ];
  }

  async bySensorId(req, res) {
    try {
      const { id } = req.params;
      const resource = await this.resource(res).findByUrlQuery(req.query, {
        sensor: id,
      });
      res.json(resource);
      res.statusCode = 200;
    } catch (e) {
      res.statusCode(500).send('error');
    }
  }

  async all(req, res, next) {
    try {
      const resource = await this.resource(res).findByUrlQuery(req.query);
      res.json(resource);
      res.statusCode = 200;
    } catch (e) {
      res.code = 500;
    }
  }
}

module.exports = Record;
