module.exports = (req, res) => {
  if (req.session.user && req.cookies.authCookie) {
    res.render("profile");
  } else {
    res.redirect("/login");
  }
};
