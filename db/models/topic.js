'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    title: DataTypes.STRING,
    photo_url: {
      type: DataTypes.TEXT,
      defaultValue: "https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png"
    }
  }, {});
  Topic.associate = function(models) {
    // associations can be defined here
    Topic.hasMany(models.Bookmark, { foreignKey: 'topic_id'})
  };
  return Topic;
};