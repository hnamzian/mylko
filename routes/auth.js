const _ = require("lodash");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const auth = require("../middleware/auth");
const { Admin } = require("../startup/db");
const express = require("express");
router = express.Router();

router.get("/", [auth], async (req, resp) => {
  const userId = req.userId;

  try {
    const result = await Admin.findAll({ where: { id: { [Op.eq]: userId } } });
    resp.send(result);
  } catch (ex) {
    throw ex.errors[0].message;
  }
});

module.exports = router;
