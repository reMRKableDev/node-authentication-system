const Uzer = require("../database/models/Uzer");

module.exports = {
  getRegistrationPage: (req, res) => {
    res.render("register");
  },
  postUserRegistration: (req, res) => {
    Uzer.create({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(results => {
        req.session.user = results.dataValues;
        console.log("User's session after registration: ", req.session.user);
        res.redirect("/profile");
      })
      .catch(error => {
        console.error(`Cannot create user: ${error.stack}`);
      });
  }
};
