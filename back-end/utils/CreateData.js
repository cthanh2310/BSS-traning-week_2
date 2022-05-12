class CreateData {
  createAccount() {
    let fs = require('fs');

    const dataDefault = [
      {
        username: 'john',
        password: 1234,
      },
      {
        username: 'admin',
        password: 1,
      },
    ];

    fs.writeFileSync(
      'data/account.txt',
      JSON.stringify(dataDefault, null, 2),
      'utf-8',
      (err) => {
        if (err) console.log(err);
        console.log('Successfully Written to File.');
      }
    );
  }
}
module.exports = new CreateData();
