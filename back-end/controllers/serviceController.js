const fs = require('fs');

exports.getAllServices = async (ctx, next) => {
  try {
    const body = ctx.request.body;
    const services = JSON.parse(fs.readFileSync('data/service.json'));

    return (ctx.body = {
      statusCode: 201,
      data: services,
    });
  } catch (err) {
    return next(err);
  }
};
exports.createService = async (ctx, next) => {
  try {
    const body = ctx.request.body;
    const services = JSON.parse(fs.readFileSync('data/service.json'));
    services.push(body);
    fs.writeFileSync('data/service.json', JSON.stringify(services));
    return (ctx.body = {
      statusCode: 201,
      data: services,
      message: 'Thêm service thành công!!',
    });
  } catch (err) {
    return next(err);
  }
};
exports.deleteService = async (ctx, next) => {
  try {
    const { id } = ctx.params;
    const services = JSON.parse(fs.readFileSync('data/service.json'));
    const newServices = services.filter(function (value) {
      return value.id !== Number(id);
    });
    fs.writeFileSync('data/service.json', JSON.stringify(newServices));
    return (ctx.body = {
      statusCode: 201,
      data: newServices,
      message: 'Xóa service thành công!!',
    });
  } catch (err) {
    return next(err);
  }
};
exports.updateService = async (ctx, next) => {
  try {
    const body = ctx.request.body;
    const services = JSON.parse(fs.readFileSync('data/service.json'));
    const newServices = services.map((value) =>
      value.id === body.id ? { ...value, ...body } : value
    );
    fs.writeFileSync('data/service.json', JSON.stringify(newServices));
    return (ctx.body = {
      statusCode: 201,
      data: newServices,
      message: 'Sửa service thành công!!',
    });
  } catch (err) {
    return next(err);
  }
};
