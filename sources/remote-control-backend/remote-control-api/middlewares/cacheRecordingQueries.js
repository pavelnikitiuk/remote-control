const dateQueries = ['dateRange', 'dateLess'];

const infinityCache = 31536000;
const defaultConfig = {
  updateTime: 10,
};

class CacheRecord {
  constructor(config, req, res, next) {
    this.config = config;
    this.req = req;
    this.res = res;
    this.next = next;
    this.cache();
  }

  cache() {
    const { req, next } = this;
    const timeQuery = dateQueries.find((query) => req.query[query]);
    if (timeQuery) {
      this.addCache(timeQuery);
    }
    next();
  }

  addCache(timeQuery) {
    const { res, req, config } = this;
    const requestedTime = /(\d+)(?!.*\d)/.exec(req.query[timeQuery])[0];
    let maxAge;
    if (requestedTime < new Date()) {
      maxAge = infinityCache;
    } else {
      maxAge = config.updateTime * 60;
    }
    res.set('Cache-Control', `max-age=${maxAge}`);
  }
}

function cache(config = defaultConfig) {
  return (...params) => new CacheRecord(config, ...params);
}

module.exports = cache;
