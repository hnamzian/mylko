const getDairiesDAO = require("../../DAO/dairy/getDairies");

module.exports = async (req, resp) => {
  const adminId = req.userId;

  const result = await getDairiesDAO(adminId);

  if (result) return resp.send({ success: true, message: "dairy found", dairies: result });

  return resp.send({ success: false, message: "dairy not found" });
};
