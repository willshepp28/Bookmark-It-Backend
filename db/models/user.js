'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    fullName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    profile_pic: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};