module.exports = (req, res, next) => {
  if (req.session.user && req.cookies.authCookie) {
    res.redirect("/profile");
  } else {
    next();
  }
};
