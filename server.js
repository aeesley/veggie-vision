var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);


// var db = require('./models')

// var testDate = {vegetable_name: 'tomato'}

// db.Vegetable.create(testDate)
// .then(function(dbveg) {
//   console.log(dbveg);
// });
// Here we introduce HTML routing to serve different HTML files
// require("./routes/html-routes.js")(app);

// Start our server so that it can begin listening to client requests.
// db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });