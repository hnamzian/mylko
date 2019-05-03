const express = require("express");
require("express-async-errors");
const deviceRouter = require("../routes/device");
const milkingRouter = require("../routes/milking");
const adminRouter = require("../routes/admin");
const dairyRouter = require("../routes/dairy");
const employeesRouter = require("../routes/employees");
const authRouter = require("../routes/auth");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/device", deviceRouter);
  app.use("/milking", milkingRouter);
  app.use("/admin", adminRouter);
  app.use("/dairy", dairyRouter);
  app.use("/employees", employeesRouter);
  app.use("/auth", authRouter);
  app.use(error);
};
