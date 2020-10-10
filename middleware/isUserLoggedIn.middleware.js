/**
 * Check if the user is logged in
 * @module
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports = (req, res, next) => {
  const { session, cookies } = req;

  session.user && cookies.nodeCookie
    ? res.status(200).redirect("/profile")
    : next();
};
