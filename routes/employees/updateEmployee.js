const updateEmployeeDAO = require("../../DAO/employee/updateEmployee");
const validate = require("./validate");
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
    "DairyId"
  ]);
  employee.AdminId = req.userId;

  const { error } = validate(employee);
  if (error) return resp.status(400).send({ success: false, message: error.details[0].message });

  const result = await updateEmployeeDAO(employee);
  if (result) {
    return resp.send({ success: true, message: "employee updated", employee: result });
  }

  return resp.send({ success: false, message: "invalid arguments" });
};
