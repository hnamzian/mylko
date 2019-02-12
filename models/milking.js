const Sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Milking", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    chipId: Sequelize.STRING,
    voltage: Sequelize.INTEGER,
    objecttemp: Sequelize.INTEGER,
    ambientTemp: Sequelize.INTEGER,
    volume: Sequelize.INTEGER,
    tagnumber: Sequelize.INTEGER,
    unitname: Sequelize.STRING,
    rfid: Sequelize.STRING
  });
  console.log("milking");
};

// const sqlite = require("../utilities/sqlite_utils");

// %d		day of month: 00
// %j		day of year: 001-366
// %w		day of week 0-6 with Sunday==0
// %m		month: 01-12
// %W		week of year: 00-53

// %Y		year: 0000-9999

// %f		fractional seconds: SS.SSS
// %H		hour: 00-24
// %J		Julian day number
// %M		minute: 00-59
// %s		seconds since 1970-01-01
// %S		seconds: 00-59

// daily average of dairy milk in (Day, Week, Month)
// daily average of dairy milk in Last(Day, Week, Month)
// daily average of Goats milk in (Day, Week, Month)
// daily average of Goats milk in Last(Day, Week, Month)

// number of milked goats of the day
// best and worst goat of the day

//   "ChipId": "80:7D:3A:45:59:00",
//   "voltage": 33,
//   "objecttemp": 308,
//   "ambientTemp": 235,
//   "volume": 3659,
//   "tagnumber": [211, 244, 225, 84, 129],
//   "unitname": "test",
//   "id": 7,
//   "rfid": "xxxxxx"

// module.exports.createTable = function() {
//   const query = `CREATE TABLE IF NOT EXISTS Milk(
//             ChipId TEXT,
//             voltage INTEGER,
//             objecttemp INTEGER,
//             ambientTemp INTEGER,
//             volume INTEGER,
//             tagnumber TEXT,
//             unitname TEXT,
//             id INTEGER,
//             rfid TEXT)`;

//   const db = sqlite.connect("dairy.db");
//   db.serialize(() => db.run(query));
// };

// module.exports.addtoTable = function(dataObj) {
// //   console.log(dataObj);
//   const query = `INSERT INTO Milk VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//   const db = sqlite.connect("dairy.db");
//   const data = db.prepare(query);
//   data.run(
//     dataObj.ChipId,
//     dataObj.voltage,
//     dataObj.objecttemp,
//     dataObj.ambientTemp,
//     dataObj.volume,
//     dataObj.tagnumber,
//     dataObj.unitname,
//     dataObj.id,
//     dataObj.rfid
//   );
//   data.finalize();
//   db.close();
// };

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
