const config = require("config");

module.exports = (mobile, expiredAt) => {
  return jwt.sign(
    {
      mobile,
      exp: expiredAt
    },
    config.get("jwtPrivateKey")
  );
};
