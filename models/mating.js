module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Mating", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // animalId: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    mateId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    }
  });
};
