const updateEmployeeDAO = require("../../DAO/employee/updateEmployee");
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

  const result = await updateEmployeeDAO(employee);
  if (result) {
    return resp.send({ success: true, message: "employee updated", employee: result });
  }

  return resp.send({ success: true, message: "invalid arguments" });
};
