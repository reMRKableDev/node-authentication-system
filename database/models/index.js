/**
 * @const Sequelize                                     Sequelize ORM dependency
 *
 * @const {Object} config                               Object containing database configurations
 * @const {string} config.dbHost                        Database host value
 * @const {string} config.dbUser                        Database user value
 * @const {string} config.dbPassword                    Database password value
 * @const {string} config.dbName                        Database name value
 *
 * @function authenticateDb                             Database authentication helper
 */
const Sequelize = require("sequelize");

const { dbName, dbUser, dbHost, dbPassword } = require("../../config/");
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
 * @type {Sequelize.constructor}                        db.Sequelize
 * @type {Sequelize.instance}                           db.connector
 * @type {Sequelize.model}                              db.readingList
 * @type {Sequelize.model}                              db.book
 */
const db = {};

db.Sequelize = Sequelize;
db.connector = connector;
db.user = require("./user.model")(Sequelize, connector);

/**
 * @module database/object
 */
module.exports = db;
