module.exports = (req, res) => {
  if (req.session.user && req.cookies.nodeCookie) {
    res.clearCookie("authCookie");
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
};
