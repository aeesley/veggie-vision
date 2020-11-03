module.exports = function(sequelize, DataTypes) {



    var Vegetable = sequelize.define("Vegetable", {

      vegetable_name: DataTypes.STRING,
      health_benefits: DataTypes.STRING,
      popular_eats: DataTypes.STRING,
      serving: DataTypes.STRING,
      calories: DataTypes.INTEGER,
      total_fat: DataTypes.INTEGER,
      sodium: DataTypes.INTEGER,
      potassium: DataTypes.INTEGER,
      total_carbo_hydrate: DataTypes.INTEGER,
      dietary_fiber: DataTypes.INTEGER,
      sugar: DataTypes.INTEGER,
      protein: DataTypes.INTEGER,
      vitamin_a: DataTypes.INTEGER,
      vitamin_c: DataTypes.INTEGER,
      iron: DataTypes.INTEGER,
    });
    return Vegetable;


  };



//   module.exports = function(sequelize, DataTypes) {



//     var Vegetable = sequelize.define("Vegetable", {

//       vegetable_name: DataTypes.VARCHAR,
//       health_benefits: DataTypes.STRING,
//       popular_eats: DataTypes.STRING,
//       serving: DataTypes.STRING,
//       calories: DataTypes.INTEGER,
//       total_fat: DataTypes.INTEGER,
//       sodium: DataTypes.INTEGER,
//       potassium: DataTypes.INTEGER,
//       total_carbo_hydrate: DataTypes.INTEGER,
//       dietary_fiber: DataTypes.INTEGER,
//       sugar: DataTypes.INTEGER,
//       protein: DataTypes.INTEGER,
//       vitamin_a: DataTypes.INTEGER,
//       vitamin_c: DataTypes.INTEGER,
//       iron: DataTypes.INTEGER,
//     });
//     return Vegetable;


//   };


  //Initial test of our db
//   module.exports = function(sequelize, DataTypes) {



//     var Vegetable = sequelize.define("Vegetable", {
//       vegetable_name: DataTypes.STRING,
//     });
//     return Vegetable;


//   };
  