module.exports = (req, res) => {
  const { session, cookies } = req;

  if (session.user && cookies.nodeCookie) {
    res.render("profile", { user: session.user });
  } else {
    res.redirect("/login");
  }
};
