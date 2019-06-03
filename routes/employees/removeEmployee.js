const removeEmployee = require("../../DAO/employee/removeEmployee");

module.exports = async (req, resp) => {
  const employeeId = req.query.employeeId;
  const dairyId = req.query.dairyId;
  const adminId = req.userId;

  const result = await removeEmployee(employeeId, dairyId, adminId);
  if (result) return resp.send({ success: true, message: "employee deleted" });
  throw Error("employee not found");
};
