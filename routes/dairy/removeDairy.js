const deleteDairyDAO = require("../../DAO/dairy/deleteDairy");

module.exports = async (req, resp) => {
  const adminId = req.userId;
  const dairyId = req.query.dairyId;

  const result = await deleteDairyDAO(dairyId, adminId);

  if (result) return resp.send({ success: true, message: "dairy deleted" });
  return resp.send({ success: false, message: "dairy not found" });
};
