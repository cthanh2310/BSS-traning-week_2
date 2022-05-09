"use strict";

const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("koa-example", "/", (ctx) => {
  ctx.body = "Hello World";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log("server listening on http://localhost:4000");
});
