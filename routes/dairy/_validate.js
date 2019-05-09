const Joi = require("joi");

module.exports = dairy => {
  const schema = {
    id: Joi.number(),
    name: Joi.string()
      .min(2)
      .required(),
    address: Joi.string().min(0),
    AdminId: Joi.number()
  };

  return Joi.validate(dairy, schema);
};
