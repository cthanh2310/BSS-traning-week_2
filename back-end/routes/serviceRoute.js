const KoaRouter = require('koa-router');
const router = new KoaRouter();
const {
  getAllServices,
  createService,
  deleteService,
  updateService,
} = require('../controllers/serviceController');

router.get('/dashboard', getAllServices);
router.post('/dashboard/create', createService);
router.delete('/dashboard/:id', deleteService);
router.put('/dashboard/update', updateService);
module.exports = { router };
