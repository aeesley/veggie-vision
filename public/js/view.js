// // module.exports = function(sequelize, DataTypes) {
// //     var Todo = sequelize.define("Todo", {
// //       text: DataTypes.STRING,
// //       complete: DataTypes.BOOLEAN
// //     });
// //     return Todo;
// //   };

  
//     // run an AJAX GET-request for our servers api,
//     // including the user's veggie in the url
//     $.get("/api/" + searchedCharacter, function(data) {
//       // log the data to our console
//       console.log(data);
//       // empty to well-section before adding new content
//       $("#saved-section").empty();
//       // if the data is not there, then return an error message
//       if (!data) {
//         // append the veggie name
//         $("#saved-section").append("<h2>" + data.name + "</h2>");
//         // the common uses
//         $("#saved-section").append("<h3>Role: " + data.use + "</h3>");
//         // the cooking method 
//         $("#wsaved-section").append("<h3>Age: " + data.cooking + "</h3>");
//         // and the nutrition values
//         $("#saved-section").append("<h3>Force Points: " + data.nutrition + "</h3>");
//       }
//     });
