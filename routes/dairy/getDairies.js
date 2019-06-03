const getDairiesDAO = require("../../DAO/dairy/getDairies");

module.exports = async (req, resp) => {
  const adminId = req.userId;

  const result = await getDairiesDAO(adminId);

  if (result && result.length)
    return resp.send({ success: true, message: "dairy found", dairies: result });

  throw Error("dairy not found");
};
