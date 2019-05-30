const Joi = require("joi");

module.exports = function validate(admin) {
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
};
