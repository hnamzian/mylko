const Milking = require("../startup/db");
const express = require("express");
const router = express.Router();

// daily average of dairy milk in (Day, Week, Month)
// daily average of dairy milk in Last(Day, Week, Month)
// daily average of Goats milk in (Day, Week, Month)
// daily average of Goats milk in Last(Day, Week, Month)

// number of milked goats of the day
// best and worst goat of the day

// module.exports.getAllData = function() {
//   const query = `SELECT rowId As id, * FROM Milk`;

//   const db = sqlite.connect("dairy.db");
//   db.each(query, function(err, row) {
//     console.log(row);
//   });

//   db.close();
// };

router.get("/dairy-avg", async (req, resp) => {});
// module.exports.avgMilk = function() {
//   const innerQuery = `
//         SELECT
//             strftime('%W', time) as week,
//             strftime('%j', time) as day,
//             SUM(vol) AS dayVol
//         FROM Milk
//         Group By strftime('%j', time)`;

//   const query = `
//         SELECT
//             sub.week AS week,
//             AVG(sub.dayVol) AS weeklyVolAvg
//         FROM(${innerQuery}) AS sub
//         Group By sub.week`;

//   const db = sqlite.connect("dairy.db");
//   db.each(query, function(err, row) {
//     console.log(row);
//   });

//   db.close();
// };

// returns daily average of total milk volume per day
router.get("/dairy-daily-avg", async (req, resp) => {
  // gets date of day as query param && period
  // returns volume avg of each day in that period
});
// module.exports.dairyDailySum = function() {
//   const query = `
//         SELECT
//             strftime('%j', time) as day,
//             SUM(vol) AS dayVol
//         FROM Milk
//         Group By strftime('%j', time)`;

//   const db = sqlite.connect("dairy.db");
//   db.each(query, function(err, row) {
//     console.log(row);
//   });

//   db.close();
// };

// returns weekly average of total milk volume per day
router.get("/dairy-daily-avg-of-week", async (req, resp) => {
  // gets date of starting day as query param
  // returns avg volume of each day of that week
});
// module.exports.dairyWeeklyAverage = function() {
//   const innerQuery = `
//         SELECT
//             strftime('%W', time) as week,
//             strftime('%j', time) as day,
//             SUM(vol) AS dayVol
//         FROM Milk
//         Group By strftime('%j', time)`;

//   const query = `
//         SELECT
//             sub.week AS week,
//             AVG(sub.dayVol) AS weeklyVolAvg
//         FROM(${innerQuery}) AS sub
//         Group By sub.week`;

//   const db = sqlite.connect("dairy.db");
//   db.each(query, function(err, row) {
//     console.log(row);
//   });

//   db.close();
// };

// returns daily average of total milk volume in a month
router.get("/dairy-daily-avg-of-month", async (req, resp) => {
  // gets date of starting day
  // returns avg volume of each day of that month
});
// module.exports.dairyMonthlyAverage = function() {
//   const innerQuery = `
//         SELECT
//             strftime('%m', time) as month,
//             strftime('%j', time) as day,
//             SUM(vol) AS dayVol
//         FROM Milk
//         Group By strftime('%j', time)`;

//   const query = `
//         SELECT
//             sub.month AS month,
//             AVG(sub.dayVol) AS monthlyVolAvg
//         FROM(${innerQuery}) AS sub
//         Group By sub.month`;

//   const db = sqlite.connect("dairy.db");
//   db.each(query, function(err, row) {
//     console.log(row);
//   });

//   db.close();
// };

// returns monthly average of total milk volume per day
router.get("/dairy-monthly-avg-of-year", async (req, resp) => {
  // gets date of startingday of year
  // returns avg volume of each month of that year
});

router.get("/dairy-sum", async (req, resp) => {
  // gets a date as starting day && a period
  // returns total volume in the period
});
// module.exports.totalMilk = function() {
//   const query = `
//         SELECT
//             SUM(vol) AS totalMilk
//         FROM Milk
//         WHERE time = (SELECT MAX(time) FROM Milk)`;

//   const db = sqlite.connect("dairy.db");
//   db.each(query, function(err, row) {
//     console.log(row);
//   });

//   db.close();
// };

// // milking cows
// // dry-off animals
// // current Month Milking
// // Total Milking

router.get("/milkimg-livestocks", async (req, resp) => {});
// module.exports.milkingGoats = function() {
//   const query = `
//         SELECT
//             COUNT(DISTINCT(goat)) AS milkingGoats
//         FROM Milk
//         WHERE time = (SELECT MAX(time) FROM Milk)`;

//   const db = sqlite.connect("dairy.db");
//   db.each(query, function(err, row) {
//     console.log(row);
//   });

//   db.close();
// };

module.exports = router;
