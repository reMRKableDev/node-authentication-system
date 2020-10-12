/**
 * Users model definition
 * @module userModel
 * @function
 *
 * @param {Object} Sequelize
 * @param {Object} connector
 * 
 * @returns {Object} user model
 */
module.exports = (Sequelize, connector) =>
  connector.define("user", {
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
