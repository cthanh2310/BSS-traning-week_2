const fs = require('fs');

exports.getAllLogs = async (ctx, next) => {
  try {
    const body = ctx.request.body;
    console.log('body', body);
    const logs = JSON.parse(fs.readFileSync('data/log.json'));

    return (ctx.body = {
      statusCode: 200,
      data: logs,
    });
  } catch (err) {
    return next(err);
  }
};
