const { connector, Sequelize } = require("../config/db.config");

/* Define a model for table Users */
module.exports = connector.define("user", {
  name: {
    type: Sequelize.STRING,
    validate: { notEmpty: true },
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
});
