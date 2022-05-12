const Koa = require('koa');
const json = require('koa-json');
const logger = require('koa-logger');
const Router = require('koa-router');
const parser = require('koa-bodyparser');
const app = new Koa({ proxy: true });
const CreateData = require('./utils/CreateData');
const cors = require('@koa/cors');
const router = Router();
// Json Prettier Middleware
app.use(json());
app.use(parser());
app.use(logger());
const { router: authRouter } = require('./routes/authRoute');
const { router: serviceRouter } = require('./routes/serviceRoute');
const { router: logRouter } = require('./routes/logRoute');

const fs = require('fs');
if (!fs.existsSync('data/service.json')) {
  CreateData.createService();
}
if (!fs.existsSync('data/account.json')) {
  CreateData.createAccount();
}
if (!fs.existsSync('data/log.json')) {
  CreateData.createLog();
}
// Simple Middleware Example
app.use(cors());

app.use(authRouter.routes()).use(authRouter.allowedMethods());
app.use(serviceRouter.routes()).use(serviceRouter.allowedMethods());
app.use(logRouter.routes()).use(logRouter.allowedMethods());

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(5500, () =>
  console.log('----------Server Started on port 5500----------')
);

module.exports = app;
