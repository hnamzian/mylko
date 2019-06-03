const getDairyEmployees = require("../../DAO/employee/getDairyEmployees");

module.exports = async (req, resp) => {
  const dairyId = req.query.dairyId;
  const adminId = req.userId;

  const employees = await getDairyEmployees(dairyId, adminId);
  if (employees) {
    return resp.send({
      success: true,
      message: "employee found",
      employees
    });
  }

  throw Error("employee not found");
};
