/**
 * Authenticate connection to the correct database
 * @module authenticateDb
 *
 * @param {Object} connector - Sequelize instance that connects to the database
 * @param {string} dbName - Name of the database
 */
module.exports = async (connector, dbName) => {
  try {
    await connector.authenticate();
    console.log(`Authentication to ${dbName} was a success!`);
  } catch (error) {
    console.error(`Couldn't authenticate connection to ${dbName}`);
  }
};
