const { SMSToken } = require("../../startup/db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = async (mobile, smsCode) => {
  const result = await SMSToken.findOne({
    where: {
      mobile: mobile,
      code: smsCode,
      expiredAt: { [Op.gte]: Date.now() / 1000 }
    }
  });
  return result;
};
