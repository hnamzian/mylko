const { SMSToken, Admin } = require("../../startup/db");
const generateAuthToken = require("../../utilities/generateAuthToken");
const parseMobile = require("../../utilities/parseMobile");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = async (req, resp) => {
  const mobile = parseMobile(req.mobile);
  if (!mobile)
    return resp.send({
      success: false,
      message: "invalid mobile number"
    });

  const result = await SMSToken.findAll({
    where: {
      mobile: { [Op.eq]: mobile },
      expiredAt: { [Op.gte]: req.expiredAt }
    }
  });

  if (result[0].dataValues.code == req.body.smsCode) {
    const admin = { mobile: mobile };
    const result = await Admin.findOrCreate({ where: admin });
    const user = result[0].dataValues;
    const authToken = generateAuthToken(user.id);
    return resp.send({
      success: true,
      message: "user found successfuly",
      user,
      token: authToken
    });
  }
  return resp.send({ success: false, message: "Invalid SMS Code" });
};
