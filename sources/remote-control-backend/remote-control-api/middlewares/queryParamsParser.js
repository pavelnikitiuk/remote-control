const availableQueries = [
  {
    pattern: /(.*)More=(.*)/,
    converter: (query, pattern) => {
      const params = pattern.exec(query);
      return {
        [params[1]]: {
          '$gte': parseInt(params[1]),
        },
      };
    },
  },
  {
    pattern: /(.*)Less=(.*)/,
    converter: (query, pattern) => {
      const params = pattern.exec(query);
      return {
        [params[1]]: {
          '$lte': parseInt(params[1]),
        },
      };
    },
  },
  {
    pattern: /(.*)Range=(.*)-(.*)/,
    converter: (query, pattern) => {
      const params = pattern.exec(query);
      return {
        [params[1]]: {
          '$gte': parseInt(params[2]),
          '$lte': parseInt(params[3]),
        },
      };
    },
  },
];

function queryParamsMiddleware(req, res, next) {
  req.mongoQuery = Object.keys(req.query).reduce((queries, key) => {
    const query = `${key}=${req.query[key]}`;
    const newQueries = availableQueries
      .filter(({ pattern }) => pattern.test(query))
      .reduce(
        (acc, { pattern, converter }) =>
          Object.assign({}, acc, converter(query, pattern)),
        {}
      );
    return Object.assign(newQueries, queries);
  }, {});
  next();
}

module.exports = queryParamsMiddleware;
