const newRouter = require("./news");
const siteRouter = require("./site");

let routerInit = (app) => {
  app.use("/news", newRouter);

  app.use("/", siteRouter);
};

module.exports = routerInit;
