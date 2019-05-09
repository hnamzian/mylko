const addDairy = require("./addDairy");
const express = require("express");
const router = express.Router();

router.post("/add", addDairy);
