const dateQueries = ['dateRange', 'dateLess'];

const infinityCache = 31536000;

function dateDependQueries(req, res, next) {
  const timeQuery = dateQueries.find((query) => req.query[query]);
  if (timeQuery) {
    addCache(timeQuery, req, res);
  }
  next();
}

function addCache(timeQuery, req, res) {
  const requestedTime = /(\d+)(?!.*\d)/.exec(req.query[timeQuery])[0];
  if (requestedTime < new Date()) {
    res.set('Cache-Control', `max-age=${infinityCache}`);
  }
}

module.exports = dateDependQueries;
