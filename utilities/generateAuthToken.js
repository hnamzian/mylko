const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = adminId => {
  return jwt.sign({ id: adminId, isAdmin: this.isAdmin }, config.jwtPrivateKey);
};
