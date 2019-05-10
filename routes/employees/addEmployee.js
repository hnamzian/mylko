const getDairyAdmin = require("../../DAO/dairy/getDairyAdmin");
const addEmployeeDAO = require("../../DAO/employee/addEmployee");
const _ = require("lodash");

module.exports = async (req, resp) => {
  const employee = _.pick(req.body, ["firstName", "lastName", "mobile", "email", "address", "position", "DairyId"]);

  const adminId = req.userId;
  const dairyAdmin = await getDairyAdmin(employee.DairyId);
  if (dairyAdmin && dairyAdmin == adminId) {
    const result = await addEmployeeDAO(employee);
    return resp.send({ success: true, message: "employee added", employee: result });
  }
  return resp.send({ success: true, message: "invalid arguments" });
};
