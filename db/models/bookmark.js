'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    subject: DataTypes.STRING,
    description: DataTypes.TEXT,
    link_url: DataTypes.TEXT
  }, {});
  Bookmark.associate = function(models) {
    // associations can be defined here
  };
  return Bookmark;
};