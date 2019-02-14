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
    macAddress: req.macAddress,
    parlourName: req.parlourName,
    sectionName: req.sectionName,
    unitName: req.unitName,
    type: req.type
  });

  resp.send({
    success: true,
    device: result
  });
});

router.get("all", async (req, resp, next) => {
  const result = await Device.fondAll();
  return resp.send({
    success: true,
    devices: result
  });
});

router.get(":id", async (req, resp, next) => {
  const result = await Device.findById(req.params.id);
  return resp.send({
    success: true,
    device: result
  });
});
