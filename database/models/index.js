/**
 * Sequelize ORM dependency
 * @module Sequelize
 */
const Sequelize = require("sequelize");

/**
 * @type {Object} config
 * @type {string} config.dbHost
 * @type {string} config.dbUser
 * @type {string} config.dbPassword
 * @type {string} config.dbName
 */
const { dbName, dbUser, dbHost, dbPassword } = require("../../config/");

/**
 * Database authentication helper
 * @module authenticateDb
 */

const authenticateDb = require("../helpers/authenticateDb.helper");

/**
 * Connects to the database by creating a Sequelize instance.
 * @instance
 * @requires module:config/index.js
 *
 * @param {string}        dbName
 * @param {string}        dbUser
 * @param {string}        dbPassword
 * @param {object.string} options.dbHost
 * @param {object.string} postgres
 */
const connector = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "postgres",
});

/**
 * Authenticate connection to the correct database
 * @function authenticateDb
 */
authenticateDb(connector, dbName);

/**
 * Initiates a database object with the connector, models, and associations.
 *
 * @const db                                            Database object
 * @type {Sequelize.constructor}
 * @type {Sequelize.instance}
 * @type {Sequelize.model}
 * @type {Sequelize.model}
 */
const db = {};

db.Sequelize = Sequelize;
db.connector = connector;
db.User = require("./user.model")(Sequelize, connector);

/**
 * @module database/object
 */
module.exports = db;
