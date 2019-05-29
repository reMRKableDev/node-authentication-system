const { connector, Sequelize } = require("../config/dbConfig");

/* Define a model for table Uzers */
module.exports = connector.define("uzer", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});
