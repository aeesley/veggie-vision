// // module.exports = function(sequelize, DataTypes) {
// //     var Todo = sequelize.define("Todo", {
// //       text: DataTypes.STRING,
// //       complete: DataTypes.BOOLEAN
// //     });
// //     return Todo;
// //   };

// const { json } = require("sequelize/types");

  
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



$(document).ready(function(){
    $(".veg_btn").click(function(){
        console.log("VEGETABLES!!!!");
        // $.get("/api/vegetables").then(function(data){
        //     $(".")
        // })
        var id = $(this).attr("data-id");
        console.log(id);

        $.ajax({
            type:"GET",
            url:"/api/vegetables/" + id,
             
            success: function(res){
                console.log(res.vegetable_name);
                $(".modal-body").html(`Here is a ${res.vegetable_name}, you can eat this many ${res.serving} and has this many ${res.calories} calories. `);
            }
        })
    })
})





///Setting up our local Storage
// $(document).ready(function(){
//     $("#save-btn").on("click", function(){
//         // var key = $(this).parent().attr("id")
//         console.log("CLICKKKKK")
//          var key = window.localStorage.key(keyOne);
//          var val = 
        
//          localStorage.setItem('keyOne', );

//     })
// })


// $("#save-btn").on("click", function(){
//     // var key = $(this).parent().attr("id")
//     console.log("CLICKKKKK")
//     // var key = window.localStorage.key(keyOne);
    
//     // localStorage.setItem('keyOne', btn);

// })

//This is the npm package Local Storage
    // if (typeof localStorage === "undefined" || localStorage === null) {
    //     var localStorage = require('node-localstorage').localStorage;
    //     localStorage = new localStorage('./scratch');
    // }

    // localStorage.setItem('key', 'value');
    // console.log(localStorage.getItem('key'))

