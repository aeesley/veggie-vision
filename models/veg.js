module.exports = function(sequelize, DataTypes) {



    var Todo = sequelize.define("Todo", {
      : DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Todo;


  };
  