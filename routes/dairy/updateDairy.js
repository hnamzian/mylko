const updateDairyDAO = require("../../DAO/dairy/updateDairy");
const validate = require("./_validate");
const _ = require("lodash");

module.exports = async (req, resp) => {
  const dairy = _.pick(req.body, ["id", "name", "address"]);
  dairy.AdminId = req.userId;

  const { error } = validate(dairy);
  if (error) return resp.status(400).send("Joi: " + error.details[0].message);

  try {
    let dairyData = await updateDairyDAO(dairy);

    if (dairyData) {
      return resp.send({ success: true, message: "dairy updated", dairy: dairyData });
    }

    resp.send({ success: false, message: "invalid dairy" });
  } catch (ex) {
    throw ex.errors[0].message;
  }
};
