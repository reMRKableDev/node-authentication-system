/**
 * Users model definition
 * @function userModel
 * @module
 *
 * @param {*} Sequelize
 * @param {*} connector
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
