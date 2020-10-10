/**
 * Check if the user is logged in
 * @module
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = (req, res, next) => {
  if (req.session.user && req.cookies.nodeCookie) {
    res.redirect("/profile");
  } else {
    next();
  }
};
