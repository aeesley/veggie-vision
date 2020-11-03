var db = require("../models");
console.log(db.Vegetable);
module.exports = function(app) {
        //GET route for getting all our vegetables
    app.get("/api/vegetables", function(req,res){
        //findAll is a sequelize function to return all entries
        db.Vegetable.findAll({}).then(function(dbVegetable){
            console.log(dbVegetable);
            //res.json(dbVegetable)
            res.render('index', dbVegetable);
        });
    });
        //a POST route, how to save a vegetable
    app.post("/api/vegetables", function(req,res){
        db.Vegetable.create({
        }).then(function(dbVegetable){
            res.json(dbVegetable);
        });
    });
}