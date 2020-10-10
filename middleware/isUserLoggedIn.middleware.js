module.exports = (req, res, next) => {
  if (req.session.user && req.cookies.nodeCookie) {
    res.redirect("/profile");
  } else {
    next();
  }
};
