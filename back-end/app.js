const Koa = require('koa');
const json = require('koa-json');
const logger = require('koa-logger');
const Router = require('koa-router');
const parser = require('koa-bodyparser');
const app = new Koa({ proxy: true });
const CreateData = require('./utils/CreateData');
const cors = require('@koa/cors');
const { login } = require('./controllers/authController');
const router = Router();
// Json Prettier Middleware
app.use(json());
app.use(parser());
app.use(logger());

CreateData.createAccount();
// Simple Middleware Example
app.use(cors());
router.get('/auth/login', login);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(5500, () =>
  console.log('----------Server Started on port 5500----------')
);

module.exports = app;
