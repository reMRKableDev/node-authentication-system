/**
 * Profile route controller
 * @module
 *
 * @param {*} req
 * @param {*} res
 */
module.exports = (req, res) => {
  const { session, cookies } = req;

  return session.user && cookies.nodeCookie
    ? res.status(200).render("profile", { userName: session.user.name })
    : res.status(200).redirect("/login");
};
