require("dotenv").config();

const Sequelize = require("sequelize");

/* Configure database */
const connector = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { host: process.env.DB_HOST, dialect: "postgres" }
);

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
