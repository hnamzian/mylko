module.exports = (sequelize, Sequelize) => {
  return sequelize.define("Employees", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true
    },
    position: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hiringDate: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });
};
