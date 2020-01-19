'use strict';
module.exports = (sequelize, DataTypes) => {
  const Weapon = sequelize.define('Weapon', {
    name: DataTypes.STRING,
    weaponId: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    video: DataTypes.STRING
  }, {});
  Weapon.associate = function(models) {
    // associations can be defined here
  };
  return Weapon;
};