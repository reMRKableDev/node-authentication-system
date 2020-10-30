/**
 * Logout route controller
 * @module
 * @function
 * 
 * @param {object} req - Incoming request object
 * @param {object} res - Outbound response object
 * @returns {string} - Value of redirected URL
 */

module.exports = (req, res) => {
  const { session, cookies } = req;
  const { sessionCookie } = require("../../config");

  return session.user && cookies[sessionCookie]
    ? res.clearCookie(sessionCookie) && res.redirect("/")
    : res.redirect("/login");
};
