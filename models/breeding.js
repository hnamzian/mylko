module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Breeding", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    breed: {
      type: Sequelize.INTEGER,
      allowNull: false
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
