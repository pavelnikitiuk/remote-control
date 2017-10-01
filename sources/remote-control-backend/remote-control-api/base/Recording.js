const Base = require('./Base');

class Recording extends Base {
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
      const recource = await this.recource.findByUrlQuery(req.query, {
        sensor: id,
      });
      res.json(recource);
      res.statusCode = 200;
    } catch (e) {
      res.statusCode(500).send('error');
    }
  }

  async all(req, res, next) {
    try {
      const recource = await this.recource.findByUrlQuery(req.query);
      res.json(recource);
      res.statusCode = 200;
    } catch (e) {
      res.code = 500;
    }
  }
}

module.exports = Recording;
