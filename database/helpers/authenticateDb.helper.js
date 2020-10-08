/**
 * Authenticate connection to the correct database
 * @module authenticateDb
 *
 * @param {*} connector
 * @param {*} dbName
 */
module.exports = async (connector, dbName) => {
  try {
    await connector.authenticate();
    console.log(`Authentication to ${dbName} was a success!`);
  } catch (error) {
    console.error(`Couldn't authenticate connection to ${dbName}`);
  }
};
