const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = (mobile, expiredAt) => {
  return jwt.sign(
    {
      mobile,
      exp: expiredAt
    },
    config.get("jwtPrivateKey")
  );
};
