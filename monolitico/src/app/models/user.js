"use strict";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password_hash: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      hooks: {
        beforeSave: async (user) => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8);
          }
        },
      },
    }
  );

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash);
  };

  User.prototype.generateToken = function () {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET);
  };

  User.associate = function (models) {
    // associations can be defined here
  };

  return User;
};
