const Uzer = require("../database/models/Uzer");
const bcrypt = require("bcrypt");

module.exports = {
  getLoginPage: (req, res) => {
    res.render("login");
  },
  postUserLogin: (req, res) => {
    Uzer.findOne({
      where: { name: req.body.username }
    })
      .then(foundUser => {
        bcrypt
          .compare(req.body.password, foundUser.dataValues.password)
          .then(results => {
            if (req.body.username !== null && results) {
              req.session.user = foundUser.dataValues;
              res.redirect("/profile");
            } else {
              console.log("Something went wrong when logging in");
              res.redirect("/login");
            }
          })
          .catch(error =>
            console.error(
              `Something went wrong when comparing passwords on login: ${
                error.stack
              }`
            )
          );
      })
      .catch(error => console.error(`Couldn't login: ${error.stack}`));
  }
};
