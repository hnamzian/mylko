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

// // returns daily average of total milk volume per day
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

// // returns weekly average of total milk volume per day
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

// // returns monthly average of total milk volume per day
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