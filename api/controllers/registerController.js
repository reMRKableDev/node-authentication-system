const User = require("../../database/models/user.model");
const { validationResult } = require("express-validator/check");
const bcrypt = require("bcrypt");

module.exports = {
  getRegistrationPage: (req, res) => {
    res.render("register", { errors: req.session.errors });
  },
  postUserRegistration: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      req.session.errors = errors.array();
      res.redirect("/register");
    } else {
      User.count({ where: { name: req.body.username } })
        .then((results) => {
          if (results > 0) {
            req.flash(
              "errorUsername",
              "This username already exists! Choose another username or login"
            );
            res.redirect("/register");
          } else {
            bcrypt
              .hash(req.body.password, 10)
              .then((hashedPassword) => {
                User.findOrCreate({
                  where: {
                    email: req.body.email,
                  },
                  defaults: {
                    name: req.body.username,
                    password: hashedPassword,
                  },
                })
                  .then(([results, created]) => {
                    if (created === false) {
                      req.flash(
                        "errorEmail",
                        "This email already exists! Choose another email or login"
                      );
                      res.redirect("/register");
                    } else {
                      req.session.user = results.dataValues;
                      res.redirect("/profile");
                    }
                  })
                  .catch((error) => {
                    console.error(
                      `Something went wrong when creating user: ${error.stack}`
                    );
                  });
              })
              .catch((error) =>
                console.error(
                  `Something went wrong when hashing password: ${error.stack}`
                )
              );
          }
        })
        .catch((err) =>
          console.error(`Something went wrong with the count: ${err.stack}`)
        );
    }
  },
};
