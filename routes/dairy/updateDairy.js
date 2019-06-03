const updateDairyDAO = require("../../DAO/dairy/updateDairy");
const validate = require("./_validate");
const _ = require("lodash");

module.exports = async (req, resp) => {
  const dairy = _.pick(req.body, ["id", "name", "address"]);
  dairy.AdminId = req.userId;

  const { error } = validate(dairy);
  if (error) throw Error(error.details[0].message);

  let dairyData = await updateDairyDAO(dairy);

  if (dairyData) {
    return resp.send({ success: true, message: "dairy updated", dairy: dairyData });
  }

  throw Error("invalid dairy");
};
