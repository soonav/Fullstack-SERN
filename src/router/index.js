const newRouter = require("./news");
const siteRouter = require("./site");

let routerInit = (app) => {
  app.get("/news", newRouter);

  app.get("/", siteRouter);
};

module.exports = routerInit;
