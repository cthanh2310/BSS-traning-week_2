const authRouter = require('./authRoute');
const logRouter = require('./logRoute');
const serviceRouter = require('./serviceRoute');
const combineRouters = require('koa-combine-routers');

const router = combineRouters(authRouter, logRouter, serviceRouter);

module.exports = router;
