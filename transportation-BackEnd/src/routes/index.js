const userRouter = require("./UserRouter");
const serviceProduct = require("./ServiceRouter");

const routes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/service", serviceProduct);
  
};

module.exports = routes;
