const updateEmployeeDAO = require("../../DAO/employee/updateEmployee");
const parseMobile = require("../../utilities/parseMobile");
const Joi = require("joi");
const _ = require("lodash");

module.exports = async (req, resp) => {
  const employee = _.pick(req.body, [
    "id",
    "firstName",
    "lastName",
    "mobile",
    "email",
    "address",
    "position",
    "hiringDate",
    "DairyId"
  ]);
  employee.AdminId = req.userId;

  employee.mobile = parseMobile(employee.mobile);
  if (!employee.mobile) throw Error("invalid mobile number");

  const { error } = validate(employee);
  if (error) throw Error(error.details[0].message);

  const result = await updateEmployeeDAO(employee);
  if (result) {
    return resp.send({ success: true, message: "employee updated", employee: result });
  }

  throw Error("invalid arguments");
};

validate = function(employee) {
  const schema = {
    id: Joi.number().required(),
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
    DairyId: Joi.number().required(),
    AdminId: Joi.number().required()
  };

  return Joi.validate(employee, schema);
};
