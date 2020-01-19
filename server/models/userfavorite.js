'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserFavorite = sequelize.define('UserFavorite', {
    userId: DataTypes.INTEGER,
    favId: DataTypes.INTEGER
  }, {});
  UserFavorite.associate = function(models) {
    // associations can be defined here
  };
  return UserFavorite;
};