const KoaRouter = require('koa-router');
const router = new KoaRouter();
const { getAllLogs } = require('../controllers/logController');

router.get('/logs', getAllLogs);
module.exports = { router };
