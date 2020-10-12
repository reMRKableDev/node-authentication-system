const Sequelize = require("sequelize");
const { dbName, dbUser, dbHost, dbPassword } = require("../../config/");
const authenticateDb = require("../helpers/authenticateDb.helper");

/**
 * Connects to the database by creating a Sequelize instance.
 * @instance
 * @memberof Sequelize
 * @requires module:config/index.js
 *
 * @type {Sequelize}
 * @param {string} dbName
 * @param {string} dbUser
 * @param {string} dbPassword
 * @param {{host: string, dialect: string}} options
 */
const connector = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
});

/**
 * @param {Object} connector - Sequelize instance that connects to the database
 * @param {string} dbName - Name of the database
 */
authenticateDb(connector, dbName);

/**
 * Initiates a database object with the connector, models, and associations.
 * @typedef {Object} db
 *
 * @property {Object} Sequelize - Sequelize constructor
 * @property {Object} connector - Sequelize instance
 * @property {Object} User - Sequelize model
 */
const db = {};

db.Sequelize = Sequelize;
db.connector = connector;
db.User = require("./user.model")(Sequelize, connector);

/**
 * Database object with
 * @module
 */
module.exports = db;
