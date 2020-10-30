/**
 * Check if the user is logged in
 * @module
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = (req, res, next) => {
  const { session, cookies } = req;
  const { sessionCookie } = require("../config");

  session.user && cookies[sessionCookie]
    ? res.status(200).redirect("/profile")
    : next();
};
