const validate = require("./_validate");
const findOrCreateAdminDAO = require("../../DAO/admin/findOrCreateAdmin");
const parseMobile = require("../../utilities/parseMobile");
const _ = require("lodash");

module.exports = async (req, resp) => {
  let admin = _.pick(req.body, ["firstName", "lastName", "email", "address"]);

  admin.mobile = parseMobile(req.mobile);
  if (!admin.mobile) return resp.send({ success: false, message: "invalid mobile number" });

  const { error } = validate(admin);
  if (error) return resp.status(400).send("Joi: " + error.details[0].message);

  const adminProfile = await findOrCreateAdminDAO(admin);

  if (admin) {
    const token = _generateAuthToken(result.dataValues.id);
    return resp.send({
      success: true,
      message: "Admin user profile registered",
      admin: adminProfile,
      token
    });
  }
  
  throw Error("Admin user not created");
};
