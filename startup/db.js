const config = require("config");
const Sequelize = require("sequelize");
const MilkingModel = require("../models/milking");
const DeviceModel = require("../models/device");

const sequelize = new Sequelize(
  config.get("db_database"),
  config.get("db_user"),
  config.get("db_password"),
  {
    host: config.get("db_host"),
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const Milking = MilkingModel(sequelize, Sequelize);
Milking.sync({ force: true });

const Device = MilkingModel(sequelize, Sequelize);
Milking.sync({ force: true });

// sequelize
//   .authenticate()
//   .then(() => {
//     winston.debug("Connection has been established successfully.");
//   })
//   .catch(err => {
//     winston.error("Unable to connect to the database:", err);
//   });

module.exports = {
  sequelize,
  Milking,
  Device
};
