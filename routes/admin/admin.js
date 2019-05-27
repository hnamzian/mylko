const { Admin } = require("../../startup/db");
const SMSTokenMW = require("../../middleware/SMSToken");
const AuthTokenMW = require("../../middleware/auth");
const generateAuthToken = require("../../utilities/generateAuthToken");
const parseMobile = require("../../utilities/parseMobile");
const Joi = require("joi");
const _ = require("lodash");
const getAdmin = require("./getAdmin");
const express = require("express");
router = express.Router();

router.post("/register", [SMSTokenMW], async (req, resp) => {
  let admin = _.pick(req.body, ["firstName", "lastName", "email", "address"]);

  admin.mobile = parseMobile(req.mobile);
  if (!admin.mobile)
    return resp.send({
      success: false,
      message: "invalid mobile number"
    });

  const { error } = validate(admin);
  if (error) return resp.status(400).send("Joi: " + error.details[0].message);

  try {
    const result = await Admin.create(admin);
    const token = _generateAuthToken(result.dataValues.id);
    return resp.send({
      success: true,
      message: "user profile registered",
      user: result[0].dataValues,
      token
    });
  } catch (ex) {
    throw ex.errors[0].message;
  }
});

router.put("/update", [AuthTokenMW], async (req, resp) => {
  let admin = _.pick(req.body, ["firstName", "lastName", "mobile", "email", "address"]);

  admin.mobile = parseMobile(admin.mobile);
  if (!admin.mobile)
    return resp.send({
      success: false,
      message: "invalid mobile number"
    });

  const { error } = validate(admin);
  if (error) return resp.status(400).send("Joi: " + error.details[0].message);

  try {
    const [numberOfAffectedRows, affectedRows] = await Admin.update(admin, {
      where: { id: req.userId, mobile: admin.mobile },
      returning: true,
      plain: true
    });

    if (affectedRows) {
      let userData = await Admin.findOne({ where: { id: req.userId, mobile: admin.mobile } });
      let user = userData.dataValues;
      const token = generateAuthToken(user.id);
      return resp.send({
        success: true,
        message: "user profile registered",
        user,
        token
      });
    }

    resp.send({
      success: false,
      message: "invalid user"
    });
  } catch (ex) {
    throw ex.errors[0].message;
  }
});

router.get("/", [AuthTokenMW], getAdmin);

function validate(admin) {
  const schema = {
    firstName: Joi.string().min(2),
    lastName: Joi.string().min(2),
    mobile: Joi.string()
      .min(11)
      .max(13)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .email(),
    address: Joi.string().min(0)
  };

  return Joi.validate(admin, schema);
}

module.exports = router;
