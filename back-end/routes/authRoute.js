const KoaRouter = require('koa-router');
const router = new KoaRouter();
const { login } = require('../controllers/authController');

router.post('/login', login);
module.exports = { router };
