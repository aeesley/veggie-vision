// DEPENDENCIES
var path = require("path");

var db = require("../models");

module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/", function(req, res) {
      res.render("index", {});
    });

    // more page with all the veggies 
    app.get("/more", function(req, res) {
      res.render("more", {});
    });

    app.get("/all", function(req, res) {
      db.Vegetable.findAll({}).then(function(data) {
        // console.log("===================================");
        // console.log(data);
        // console.log("===================================");
        var vegetableObject = {
          Vegetable: data
        };
        console.log(vegetableObject);
        res.render("index", vegetableObject);
      });
      // res.render("index", {});
    });

  
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