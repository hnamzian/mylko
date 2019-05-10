const { SMSToken } = require("../../startup/db");

module.exports = async smsToken => {
  const expiredAt = Math.floor(Date.now() / 1000) + 10 * 60;
  const result = await SMSToken.create({
    mobile: smsToken.mobile,
    code: smsToken.code,
    expiredAt
  });
  return result;
};
