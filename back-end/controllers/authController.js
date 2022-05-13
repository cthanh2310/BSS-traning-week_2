const fs = require('fs');

exports.login = async (ctx, next) => {
  try {
    const body = ctx.request.body;
    const users = JSON.parse(fs.readFileSync('data/account.json'));

    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username === body.username &&
        users[i].password === body.password
      ) {
        ctx.cookies.set('token', `${body.username}-token-123/231-454564`, {
          httpOnly: true,
        });
        return (ctx.body = {
          token: `${body.username}-token-123/231-454564`,
        });
      }
    }
    return (ctx.body = {
      statusCode: 404,
      message: 'Tài khoản hoặc mật khẩu không chính xác!',
    });
  } catch (err) {
    return next(err);
  }
};
