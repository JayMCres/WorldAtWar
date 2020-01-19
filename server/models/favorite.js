'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    name: DataTypes.STRING,
    weaponId: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    video: DataTypes.STRING
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
  };
  return Favorite;
};