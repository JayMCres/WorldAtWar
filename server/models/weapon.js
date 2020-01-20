'use strict';
module.exports = (sequelize, DataTypes) => {
  const Weapon = sequelize.define('Weapon', {
    pictureone: DataTypes.STRING,
    picturetwo: DataTypes.STRING,
    video: DataTypes.STRING,
    weaponId: DataTypes.STRING
  }, {});
  Weapon.associate = function(models) {
    // associations can be defined here
  };
  return Weapon;
};