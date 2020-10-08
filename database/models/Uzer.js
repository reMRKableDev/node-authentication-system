const { connector, Sequelize } = require("../config/db.config");

/* Define a model for table Uzers */
module.exports = connector.define("uzer", {
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
