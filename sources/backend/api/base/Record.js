// const Base = require('./Base');

// class Record extends Base {
//   constructor(router, resource) {
//     super(router, resource);
//     this._router = router;
//     this._resource = resource;
//     this._init();
//   }

//   get router() {
//     return this._router;
//   }

//   get() {
//     this._router.get('/', async (req, res, next) => {
//       try {
//         const start = new Date(new Date() - 1000 * 60 * 120);
//         const end = new Date(new Date() - 1000 * 60 * 60);
//         const recources = await this._resource.findByDateRange(start, end);
//         res.json(recources);
//       } catch (e) {
//         next(e);
//       }
//     });
//   }

//   _init() {
//     this.get();
//   }
// }

// module.exports = Record;
