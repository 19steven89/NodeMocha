var db = require("./db.js");

module.exports.handleSignUp = (email, password) => {
  //check if email already exists
  //save the usert to the DB
  db.saveUser({
    email: email,
    password: password
  });

  //send the welcome email
};
