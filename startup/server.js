const http = require("http");
const express = require("express");
const deviceRouter = require("../routes/device");
const milkingRouter = require("../routes/milking");

module.exports = function(app) {
  app.set("server_port", process.env.PORT || 3000);
  app.set("host", process.env.HOST || "0.0.0.0");
  const server = http.createServer(app);
  return server;
};
