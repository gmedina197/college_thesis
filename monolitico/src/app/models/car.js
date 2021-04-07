"use strict";
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    "Car",
    {
      model: DataTypes.STRING,
      year: DataTypes.INTEGER,
      color: DataTypes.STRING,
      owner: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {}
  );

  Car.associate = function (models) {
    Car.belongsTo(models.User, {
      foreignKey: "owner",
      onDelete: "CASCADE",
    });
  };

  return Car;
};
