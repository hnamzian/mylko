const { SMSToken } = require("../../startup/db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = async mobile => {
  let smsToken = await SMSToken.findOne({
    where: {
      mobile: mobile,
      expiredAt: { [Op.gte]: Date.now() / 1000 }
    }
  });
  console.log(smsToken)
  return smsToken;
};
