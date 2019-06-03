const getDairyAdmin = require("../../DAO/dairy/getDairyAdmin");
const addEmployeeDAO = require("../../DAO/employee/addEmployee");
const validate = require("./validate");
const parseMobile = require("../../utilities/parseMobile");
const _ = require("lodash");

module.exports = async (req, resp) => {
  const employee = _.pick(req.body, [
    "firstName",
    "lastName",
    "mobile",
    "email",
    "address",
    "position",
    "hiringDate",
    "DairyId"
  ]);

  employee.mobile = parseMobile(employee.mobile);
  if (!employee.mobile) throw Error("invalid mobile number");

  const { error } = validate(employee);
  if (error) throw Error(error.details[0].message);

  const adminId = req.userId;
  const dairyAdmin = await getDairyAdmin(employee.DairyId);
  if (dairyAdmin && dairyAdmin == adminId) {
    employee.AdminId = adminId;
    const result = await addEmployeeDAO(employee);
    return resp.send({ success: true, message: "employee added", employee: result });
  }

  throw Error("invalid arguments");
};
