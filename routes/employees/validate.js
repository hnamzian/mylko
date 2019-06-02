const Joi = require("joi");

module.exports = employee => {
  const schema = {
    firstName: Joi.string()
      .min(2)
      .required(),
    lastName: Joi.string()
      .min(2)
      .required(),
    mobile: Joi.string()
      .min(11)
      .max(13),
    email: Joi.string()
      .min(5)
      .max(255)
      .email(),
    address: Joi.string().min(0),
    position: Joi.string()
      .min(5)
      .max(255)
      .required(),
    hiringDate: Joi.string(),
    DairyId: Joi.number().required()
  };

  return Joi.validate(employee, schema);
};
