const express = require("express");
const deviceRouter = require("../routes/device");
const milkingRouter = require("../routes/milking");

module.exports = function(app) {
  app.use(express.json());
  app.use("/device", deviceRouter);
  app.use("/milking", milkingRouter);
};
