require("dotenv").config();

const Sequelize = require("sequelize");

const { dbName, dbUser, dbHost, dbPassword } = require("../../config/");

const connector = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
});

/* Authenticate that we can connect to the correct database */
const authenticateDb = async () => {
  try {
    await connector.authenticate();
    console.log(`Authentication to ${process.env.DB_NAME} was a success!`);
  } catch (error) {
    console.error(`Couldn't authenticate connection to ${process.env.DB_NAME}`);
  }
};

authenticateDb();

module.exports = {
  Sequelize,
  connector,
};
