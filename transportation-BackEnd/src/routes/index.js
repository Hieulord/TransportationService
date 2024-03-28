const userRouter = require("./UserRouter");
const serviceProduct = require("./ServiceRouter");
const serviceType = require("./ServiceTypeRouter")
const order = require("./OrderRouter")
const staffType = require("./StaffTypeRouter")
const staff = require("./StaffRouter")

const routes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/service", serviceProduct);
  app.use("/api/serviceType", serviceType);
  app.use("/api/order", order);
  app.use("/api/staffType", staffType);
  app.use("/api/staff", staff);
  
};

module.exports = routes;
