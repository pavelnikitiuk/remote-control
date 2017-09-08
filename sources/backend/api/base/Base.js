function get(router, resource) {
  router.get('/', async (req, res, next) => {
    try {
      const recources = await resource.find();
      if (!recources.length) {
        res.statusCode = 404;
      }
      res.statusCode = 200;
      res.json(recources);
    } catch (e) {
      next(e);
    }
  });
}

module.exports = { get };
