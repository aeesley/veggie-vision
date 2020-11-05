$(document).ready(function(){
    $(".veg_btn").click(function(){
        //console.log("VEGETABLES!!!!");
        
        var id = $(this).attr("data-id");
        //console.log(id);

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
    })

})

//This is the npm package Local Storage ---> New Technology 


    // if (typeof localStorage === "undefined" || localStorage === null) {
    //     var localStorage = require('node-localstorage').localStorage;
    //     localStorage = new localStorage('./scratch');
    // }

    // localStorage.setItem('key', 'value');
    // console.log(localStorage.getItem('key'))

