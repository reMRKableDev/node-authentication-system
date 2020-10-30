/**
 * Profile route controller
 * @module
 * @function
 *
 * @param {object} req - Incoming request object
 * @param {object} res - Outbound response object
 * @returns {string} - Value of a view to be rendered or redirected URL
 */
module.exports = (req, res) => {
  const { session, cookies } = req;
  const { sessionCookie } = require("../../config");

  return session.user && cookies[sessionCookie]
    ? res.status(200).render("profile", { userName: session.user.name })
    : res.status(200).redirect("/login");
};
