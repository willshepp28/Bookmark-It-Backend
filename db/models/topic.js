'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    title: DataTypes.STRING,
    photo_url: DataTypes.TEXT
  }, {});
  Topic.associate = function(models) {
    // associations can be defined here
  };
  return Topic;
};