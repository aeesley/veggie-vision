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
                $(".modal-title").html(`${res.vegetable_name}`);
                $(".modal-healthbens").html(`${res.health_benefits}`);
                $(".modal-popeats").html(`${res.popular_eats}`);
                $(".modal-serving").html(`${res.serving}`);
                $(".modal-calories").html(`${res.calories}`);
                $(".modal-totalfat").html(`${res.total_fat} (g)`);
                $(".modal-sodium").html(`${res.sodium} (g)`);
                $(".modal-potassium").html(`${res.potassium} (g)`);
                $(".modal-carbs").html(`${res.total_carbo_hydrate} (g)`);
                $(".modal-fiber").html(`${res.dietary_fiber} (g)`);
                $(".modal-sugar").html(`${res.sugar} (g)`);
                $(".modal-protein").html(`${res.protein} (g)`);
                $(".modal-vitamin-a").html(`${res.vitamin_a} (%DV)`);
                $(".modal-vitamin-c").html(`${res.vitamin_c} (%DV)`);
                $(".modal-iron").html(`${res.iron} (%DV)`); 
                $('#save-btn').val(id)               
            }  
        })    
    })
    $("#save-btn").on("click", function(){
        //console.log("CLICKKKKK")
        // take inventory of the localstorage
        /*
        let currentStorage;
        if (localStorage.getItem('vegetableName')) {
            currentStorage = JSON.parse(localStorage.getItem('vegetableName'))
        } else currentStorage = [];
        */
        // ternary operator
        let currStorage = localStorage.getItem('vegetableName') ? JSON.parse(localStorage.getItem('vegetableName')) : [];
        // add new bit to currentStorage
        var vegName = $(this).val();
        if (currStorage.includes(vegName)) {
            return;
        } else {
            currStorage.push(vegName);
            
        }
        // set localstorage with all new
        localStorage.setItem("vegetableName", JSON.stringify(currStorage));
        
        

    //JSON.parse(localStorage.getItem("user")); --> This should be used to parse the name of the vegetable onto the screen where we want it. 


        
    })

})




///Setting up our local Storage
// $(document).ready(function(){
//     $("#save-btn").on("click", function(){
//         console.log("CLICKKKKK")

//         var vegName = 
         
//         //window.localStorage = Gives yu access to a property, can just omit the 'window.'
//         //localStorage gives you a local object. 
//         //console.log(localStorage);

//         //setItem takes two elements, a key and a value! The value is also automatically converted to a string if its an integer

//             //For us, we need that value to produce what is being displayed on the screen. Or just the Vegetable?
//         localStorage.setItem("Vegetable", vegName);
//         //If you delete the above ^ you will still see it in the localStorage even if you refresh the server. Data does not expire.

//         //If we need to remove an item: localStorage.removeItem("key");
            
//         //Testing to see if we can grab the above key with a getItem.
//         //console.log(localStorage.getItem("Vegetable"));

//         //Testing keys in our localStorage, this will grab the first key in localStorage, and display it on console. 
//         //console.log(localStorage.key(0));
         
//     })
// })


//This is the npm package Local Storage
    // if (typeof localStorage === "undefined" || localStorage === null) {
    //     var localStorage = require('node-localstorage').localStorage;
    //     localStorage = new localStorage('./scratch');
    // }

    // localStorage.setItem('key', 'value');
    // console.log(localStorage.getItem('key'))

