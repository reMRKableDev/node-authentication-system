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

  return session.user && cookies.nodeCookie
    ? res.clearCookie("nodeCookie") && res.redirect("/")
    : res.redirect("/login");
};
