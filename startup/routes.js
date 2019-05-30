const cors = require("cors");
const express = require("express");
require("express-async-errors");
const deviceRouter = require("../routes/device");
const milkingRouter = require("../routes/milking");
const adminRouter = require("../routes/admin/admin");
const dairyRouter = require("../routes/dairy/dairy");
const employeesRouter = require("../routes/employees/employees");
const authRouter = require("../routes/auth/auth");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(cors());
  app.use(express.json());
  app.use("/device", deviceRouter);
  app.use("/milking", milkingRouter);
  app.use("/admin", adminRouter);
  app.use("/dairy", dairyRouter);
  app.use("/employees", employeesRouter);
  app.use("/auth", authRouter);
  app.use(error);
};
