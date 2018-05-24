const express = require("express");

var app = express();

//sets up an http get handler
app.get("/", (req, res) => {
  res.status(404).send({
    error: "Page not found",
    name: "Todo App v1.0"
  });

});

app.get("/users", (req, res) => {
  res.status(200).send([{
    name: "Steven",
    age: 29
  },{
    name: "Chris",
    age: 32
  },{
    name: "Johnny",
    age: 28
  }]);
});

//bind to port 3000
app.listen(3000);

module.exports.app = app;
