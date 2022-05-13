const KoaRouter = require('koa-router');
const serviceRouter = new KoaRouter();
const {
  getAllServices,
  createService,
  deleteService,
  updateService,
} = require('../controllers/serviceController');

serviceRouter.get('/dashboard', getAllServices);
serviceRouter.post('/dashboard/create', createService);
serviceRouter.delete('/dashboard/:id', deleteService);
serviceRouter.put('/dashboard/update', updateService);
module.exports = serviceRouter;
