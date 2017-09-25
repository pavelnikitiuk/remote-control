const Base = require('./Base');

class Recording extends Base {
  constructor(recource, app, path) {
    super(app, path);
    this.recource = recource;
  }

  get services() {
    return [
      {
        action: this.all,
      },
    ];
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
