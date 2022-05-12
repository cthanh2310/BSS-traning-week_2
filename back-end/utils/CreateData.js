const fs = require('fs');

class CreateData {
  async createAccount() {
    try {
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

      await fs.writeFileSync('data/account.json', JSON.stringify(dataDefault));
    } catch (err) {
      console.log(err);
    }
  }
  async createService() {
    try {
      const dataDefault = [
        {
          id: 1,
          name: 'TV',
          macAddress: '00:18:44:11:3A:B7',
          ip: '127.0.0.2',
          createdDate: '31-05-2021',
          powerConsumption: 50,
        },
        {
          id: 2,
          name: 'Washer',
          macAddress: '00:18:44:11:3A:B8',
          ip: '127.0.0.3',
          createdDate: '31-05-2021',
          powerConsumption: 60,
        },
        {
          id: 3,
          name: 'Refrigerator',
          macAddress: '00:18:44:11:3A:B9',
          ip: '127.0.0.4',
          createdDate: '31-05-2021',
          powerConsumption: 80,
        },
        {
          id: 4,
          name: 'Selling Fan',
          macAddress: '00:18:44:11:3A:B2',
          ip: '127.0.0.5',
          createdDate: '31-05-2021',
          powerConsumption: 100,
        },
      ];

      await fs.writeFileSync('data/service.json', JSON.stringify(dataDefault));
    } catch (err) {
      console.log(err);
    }
  }
  async createLog() {
    try {
      const dataDefault = [
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 1 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 2 },
        { name: 'Refrigerator', action: 'Sleep', createdDate: '31-05-2021', id: 3 },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 4,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 5 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 6 },
        { name: 'Refrigerator', action: 'Sleep', createdDate: '31-05-2021', id: 7 },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 8,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 9 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 10 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 11,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 12,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 13 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 14 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 15,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 16,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 17 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 18 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 19,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 20,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 21 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 22 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 23,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 24,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 25 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 26 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 27,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 28,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 29 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 30 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 31,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 32,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 33 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 34 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 35,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 36,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 37 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 38 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 39,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 40,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 41 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 42 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 43,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 44,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 45 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 46 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 47,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 48,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 49 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 50 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 51,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 52,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 53 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 54 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 55,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 56,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 57 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 58 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 59,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 60,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 61 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 62 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 63,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 64,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 65 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 66 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 67,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 68,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 69 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 70 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 71,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 72,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 73 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 74 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 75,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 76,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 77 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 78 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 79,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 80,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 81 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 82 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 83,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 84,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 85 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 86 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 87,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 88,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 89 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 90 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 91,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 92,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 93 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 94 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 95,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 96,
        },
        { name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 97 },
        { name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 98 },
        {
          name: 'Refrigerator',
          action: 'Sleep',
          createdDate: '31-05-2021',
          id: 99,
        },
        {
          name: 'Selling Fan',
          action: 'Not working!!!',
          createdDate: '31-05-2021',
          id: 100,
        },
      ];

      await fs.writeFileSync('data/log.json', JSON.stringify(dataDefault));
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = new CreateData();