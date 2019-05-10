const getDairyDAO = require("../../DAO/dairy/getDairy");

module.exports = async (req, resp) => {
  const adminId = req.userId;
  const dairyId = req.query.dairyId;

  const result = await getDairyDAO(dairyId, adminId);

  if (result) return resp.send({ success: true, message: "dairy found", dairy: result });

  return resp.send({ success: false, message: "dairy not found" });
};
