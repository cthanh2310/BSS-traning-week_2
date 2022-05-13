const KoaRouter = require('koa-router');
const authRouter = new KoaRouter();
const { login } = require('../controllers/authController');

authRouter.post('/login', login);
module.exports = authRouter;
