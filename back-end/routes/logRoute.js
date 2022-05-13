const KoaRouter = require('koa-router');
const logRouter = new KoaRouter();
const { getAllLogs } = require('../controllers/logController');

logRouter.get('/logs', getAllLogs);
module.exports = logRouter;
