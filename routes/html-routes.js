// DEPENDENCIES
var path = require("path");

module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/", function(req, res) {
      res.render("index", {});
    });
  
    // // add route loads the add.html page,
    // // where users can enter new characters to the db
    // app.get("/add", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/add.html"));
    // });
  
    // // all route loads the all.html page,
    // // where all characters in the db are displayed
    // app.get("/all", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/all.html"));
    // });
  
  };

















// var express = require("express");
// var router = express.Router();

// Import the model (cat.js) to use its database functions.
// var db = require("../models");

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//     console.log("Veguru route test", res);

//     // var vegObj = {
//     //     vegetables: [{name: "tomato", id: 1}]
//     // }
//     // return console.log(vegObj);
//     // res.render("index", vegObj);
// });