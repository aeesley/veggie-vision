var db = require("../models");
console.log(db.Vegetable);
module.exports = function(app) {
        //GET route for getting all our vegetables
    app.get("/api/vegetables/:id", function(req,res){
        var id = req.params.id;
        // console.log(id);
        
        //findOne is a sequelize function where we are returning a specific ID from our Vegetables DB 
        db.Vegetable.findOne({ where: { id: id } }).then(function(dbVegetable){
            // console.log("HERE IS OUR VEGETABLES!!!!" ,dbVegetable);
            res.json(dbVegetable);
        })
        //findAll is a sequelize function to return all entries - used for testing
        // db.Vegetable.findAll({}).then(function(dbVegetable){
        //     console.log(dbVegetable);
        //     //res.json(dbVegetable)
        //     res.render('index', dbVegetable);
        // });
    });
    
}