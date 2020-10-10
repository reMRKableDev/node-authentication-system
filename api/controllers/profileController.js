module.exports = (req, res) => {
  if (req.session.user && req.cookies.nodeCookie) {
    res.render("profile");
  } else {
    res.redirect("/login");
  }
};
