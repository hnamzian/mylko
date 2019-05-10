const { Admin } = require("../../startup/db");
const validateSMSCode = require("../../DAO/sms/validateSMSCode");
const generateAuthToken = require("../../utilities/generateAuthToken");
const parseMobile = require("../../utilities/parseMobile");

module.exports = async (req, resp) => {
  const mobile = parseMobile(req.mobile);
  if (!mobile)
    return resp.send({
      success: false,
      message: "invalid mobile number"
    });

  const result = await validateSMSCode(mobile, req.body.smsCode)

  if (result && result.dataValues.code == req.body.smsCode) {
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
