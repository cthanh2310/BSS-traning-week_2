const path = require('path');
exports.login = async (ctx) => {
  try {
    console.log('path', path.dirname(path));
    let fs = require('fs');
    const users = fs.readFileSync('data/account.txt', 'utf-8');
    console.log('users', users);
  } catch (err) {
    return next(err);
  }
};
