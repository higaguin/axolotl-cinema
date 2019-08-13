'use strict';
module.exports = (sequelize, DataTypes) => {
  const Idiom = sequelize.define('Idiom', {
    idiom_name: DataTypes.STRING
  }, {});
  Idiom.associate = function(models) {
    // associations can be defined here
  };
  return Idiom;
};