const getEmployeeByIdDAO = require("../../DAO/employee/getEmployeeById");

module.exports = async (req, resp) => {
  const employeeId = req.query.employeeId;
  const dairyId = req.query.dairyId;
  const adminId = req.userId;

  console.log(dairyId, adminId, employeeId);
  const employee = await getEmployeeByIdDAO(employeeId, dairyId, adminId);

  if (employee) {
    return resp.send({
      success: true,
      message: "employee found",
      employee
    });
  }

  return resp.send({ success: false, message: "employee not found" });
};
