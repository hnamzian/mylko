module.exports = (sequelize, Sequelize) => {
  return sequelize.define("SMSToken", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: false
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false
    },
    expiredAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });
};
