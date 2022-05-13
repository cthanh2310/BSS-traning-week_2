const Koa = require('koa');
const json = require('koa-json');
const logger = require('koa-logger');
const parser = require('koa-bodyparser');
const app = new Koa({ proxy: true });
const CreateData = require('./utils/CreateData');
const cors = require('@koa/cors');
// Json Prettier Middleware
app.use(json());
app.use(parser());
app.use(logger());
const router = require('./routes/index');

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

app.use(router());

app.listen(5500, () =>
  console.log('----------Server Started on port 5500----------')
);

module.exports = app;
