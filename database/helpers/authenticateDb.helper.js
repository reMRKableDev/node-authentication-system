/**
 * Authenticate connection to the correct database
 * @module authenticateDb
 * @function
 *
 * @param {Object} connector - Sequelize instance that connects to the database
 * @param {string} dbName - Name of the database
 *
 * @returns {string} database authentication validation
 */
module.exports = async (connector, dbName) => {
  try {
    await connector.authenticate();
    console.log(`Authentication to ${dbName} was a success!`);
  } catch (error) {
    console.error(`Couldn't authenticate connection to ${dbName}`);
  }
};
