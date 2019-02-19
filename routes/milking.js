const { sequelize, Milking } = require("../startup/db");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require("moment");
const express = require("express");
const router = express.Router();

// daily average of dairy milk in (Day, Week, Month)
// daily average of dairy milk in Last(Day, Week, Month)
// daily average of Goats milk in (Day, Week, Month)
// daily average of Goats milk in Last(Day, Week, Month)

// milking cows
// dry-off animals
// current Month Milking
// Total Milking

// number of milked goats of the day
// best and worst goat of the day

// returns daily average of total milk volume
router.get("/dairy-daily-avg", async (req, resp) => {
  // gets date of a day as query param && period
  console.log(req.query);

  const startDate = req.query.startDate;
  const period = req.query.period;
  const endDate = moment(startDate).add(period, "days");
  const result = await Milking.findAll({
    attributes: [
      "createdAt",
      [sequelize.fn("YEAR", sequelize.col("createdAt")), "year"],
      [sequelize.fn("MONTH", sequelize.col("createdAt")), "month"],
      [sequelize.fn("DAY", sequelize.col("createdAt")), "day"],
      [sequelize.fn("AVG", sequelize.col("volume")), "AVG_VOL"]
    ],
    where: { createdAt: { [Op.gte]: startDate, [Op.lte]: endDate } },
    group: ["day", "month", "year"]
  });
  console.log(result);
  resp.send(result);

  // returns volume avg of each day in that period
});

// returns weekly average of total milk volume
router.get("/dairy-weekly-avg", async (req, resp) => {
  // gets date of startingday && period in months
  const startDate = req.query.startDate;
  const period = req.query.period;
  const endDate = moment(startDate).add(period, "weeks");
  await Milking.findAll({
    attributes: [
      "createdAt",
      [sequelize.fn("YEAR", sequelize.col("createdAt")), "year"],
      [sequelize.fn("MONTH", sequelize.col("createdAt")), "month"],
      [sequelize.fn("WEEK", sequelize.col("createdAt")), "week"],
      [sequelize.fn("AVG", models.sequelize.col("volume")), "volume"]
    ],
    where: { createdAt: { [Op.gte]: startDate, [Op.lte]: endDate } },
    group: ["week", "month", "year"]
  });

  // returns avg volume of each month of that year
});

// returns monthly average of total milk volume
router.get("/dairy-monthly-avg", async (req, resp) => {
  // gets date of startingday && period in months
  const startDate = req.query.startDate;
  const period = req.query.period;
  const endDate = moment(startDate).add(period, "months");
  await Milking.findAll({
    attributes: [
      "createdAt",
      [sequelize.fn("YEAR", sequelize.col("createdAt")), "year"],
      [sequelize.fn("MONTH", sequelize.col("createdAt")), "month"],
      [sequelize.fn("AVG", models.sequelize.col("volume")), "volume"]
    ],
    where: { createdAt: { [Op.gte]: startDate, [Op.lte]: endDate } },
    group: ["month", "year"]
  });

  // returns avg volume of each month of that year
});

// returns daily average of total milk volume
router.get("/dairy-daily-sum", async (req, resp) => {
  // gets date of a day as query param && period
  const startDate = req.query.startDate;
  const period = req.query.period;
  const endDate = moment(startDate).add(period, "days");
  await Milking.findAll({
    attributes: [
      [sequelize.fn("DATE", sequelize.col("created_at")), "day"],
      [sequelize.fn("SUM", models.sequelize.col("volume")), "volume"]
    ],
    where: { createdAt: { [Op.gte]: startDate, [Op.lte]: endDate } },
    group: ["day"]
  });

  // returns volume avg of each day in that period
});

// returns weekly sum of total milk volume
router.get("/dairy-weekly-sum", async (req, resp) => {
  // gets date of startingday && period in months
  const startDate = req.query.startDate;
  const period = req.query.period;
  const endDate = moment(startDate).add(period, "weeks");
  await Milking.findAll({
    attributes: [
      "createdAt",
      [sequelize.fn("YEAR", sequelize.col("createdAt")), "year"],
      [sequelize.fn("MONTH", sequelize.col("createdAt")), "month"],
      [sequelize.fn("WEEK", sequelize.col("createdAt")), "week"],
      [sequelize.fn("SUM", models.sequelize.col("volume")), "volume"]
    ],
    where: { createdAt: { [Op.gte]: startDate, [Op.lte]: endDate } },
    group: ["week", "month", "year"]
  });

  // returns avg volume of each month of that year
});

// returns monthly sum of total milk volume
router.get("/dairy-monthly-sum", async (req, resp) => {
  // gets date of startingday && period in months
  const startDate = req.query.startDate;
  const period = req.query.period;
  const endDate = moment(startDate).add(period, "months");
  await Milking.findAll({
    attributes: [
      "createdAt",
      [sequelize.fn("YEAR", sequelize.col("createdAt")), "year"],
      [sequelize.fn("MONTH", sequelize.col("createdAt")), "month"],
      [sequelize.fn("AVG", models.sequelize.col("volume")), "volume"]
    ],
    where: { createdAt: { [Op.gte]: startDate, [Op.lte]: endDate } },
    group: ["month", "year"]
  });

  // returns avg volume of each month of that year
});

// returns number of milking livestocks in a day
router.get("/milkimg-livestocks", async (req, resp) => {
  // gets a date
  const date = req.query.startDate;
  await Milking.findAll({
    attributes: [
      [sequelize.fn("DATE", "day", sequelize.col("created_at")), "date"],
      [sequelize.fn("COUNT", sequelize.col("tagNumber")), "count"]
    ],
    where: { date: { [Op.eq]: date } },
    group: ["tagNumber"]
  });
  // returns  number of milking livestocks in that date
});

module.exports = router;
