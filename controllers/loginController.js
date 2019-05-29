const Uzer = require("../database/models/Uzer");

module.exports = {
  getLoginPage: (req, res) => {
    res.render("login");
  },
  postUserLogin: (req, res) => {
    Uzer.findOne({ where: { name: req.body.username } })
      .then(foundUser => {
        console.log(foundUser);
        if (req.body.username !== null && foundUser) {
          req.session.user = foundUser.dataValues;
          res.redirect("/profile");
        } else {
          console.log("Something went wrong when logging in");
          res.redirect("/login");
        }
      })
      .catch(error => console.error(`Couldn't login: ${error.stack}`));
  }
};
