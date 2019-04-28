const config = require("config");
const Sequelize = require("sequelize");
const AnimalsModel = require("../models/animals");
const BreedingModel = require("../models/breeding");
const DeviceModel = require("../models/device");
const DiseaseModel = require("../models/disease");
const FoodModel = require("../models/food");
const MatingModel = require("../models/mating");
const MilkingModel = require("../models/milking");
const VaccinsModel = require("../models/vaccins");
const WaterModel = require("../models/water");
const WeightModel = require("../models/weight");
const WoolModel = require("../models/wool");

const sequelize = new Sequelize(config.get("db_database"), config.get("db_user"), config.get("db_password"), {
  host: config.get("db_host"),
  dialect: "mysql",
  operatorsAliases: false,
  logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Device = DeviceModel(sequelize, Sequelize);
const Milking = MilkingModel(sequelize, Sequelize);
Milking.belongsTo(Device);

const Animals = AnimalsModel(sequelize, Sequelize);
const Breeding = BreedingModel(sequelize, Sequelize);
Breeding.belongsTo(Animals);

const Disease = DiseaseModel(sequelize, Sequelize);
Disease.belongsTo(Animals);

const Food = FoodModel(sequelize, Sequelize);
Food.belongsTo(Animals);

const Mating = MatingModel(sequelize, Sequelize);
Mating.belongsTo(Animals);

const Vaccins = VaccinsModel(sequelize, Sequelize);
Vaccins.belongsTo(Animals);

const Water = WaterModel(sequelize, Sequelize);
Water.belongsTo(Animals);

const Weight = WeightModel(sequelize, Sequelize);
Weight.belongsTo(Animals);

const Wool = WoolModel(sequelize, Sequelize);
Wool.belongsTo(Animals);

Device.sync();
Milking.sync();
Animals.sync();
Breeding.sync();
Disease.sync();
Food.sync();
Mating.sync();
Vaccins.sync();
Water.sync();
Weight.sync();
Wool.sync();

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
  Device,
  Animals,
  Breeding,
  Disease,
  Food,
  Mating,
  Vaccins,
  Water,
  Weight,
  Wool
};
