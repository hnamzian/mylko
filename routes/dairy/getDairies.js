const getDairiesDAO = require("../../DAO/dairy/getDairies");

module.exports = async (req, resp) => {
  const adminId = req.userId;

  const result = await getDairiesDAO(adminId);

  resp.send({ success: true, message: "dairy found", dairy: result });
};
