const http = require("http");
const deviceRouter = require("../routes/device");

module.exports = function(app) {
  app.set("server_port", process.env.PORT || 3000);
  app.set("host", process.env.HOST || "0.0.0.0");
  app.use("/device", deviceRouter);
  const server = http.createServer(app);
  return server;
};
