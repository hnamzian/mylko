const { Device } = require("../startup/db");
const express = require("express");
router = express.Router();

router.post("/register", async (req, resp, next) => {
  const device = await Device.findOne({ where: { macAddress: req.macAddress } });
  if (device) {
    return resp.send({
      success: false,
      message: "Device existed."
    });
  }

  const result = await Device.create({
    macAddress: req.body.macAddress,
    parlourName: req.body.parlourName,
    sectionName: req.body.sectionName,
    unitName: req.body.unitName,
    type: req.body.type
  });

  resp.send({
    success: true,
    device: result
  });
});

router.get("/all", async (req, resp, next) => {
  const result = await Device.findAll();
  return resp.send({
    success: true,
    devices: result
  });
});

router.get("/", async (req, resp, next) => {
  let result = {};
  if (req.query.id) {
    result = await Device.findById(req.query.id);
  } else if (req.query.mac) {
    result = await Device.findOne({ where: { macAddress: req.query.mac } });
  }
  return resp.send({
    success: true,
    device: result
  });
});

module.exports = router;
