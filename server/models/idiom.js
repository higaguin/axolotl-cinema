'use strict';
module.exports = (sequelize, DataTypes) => {
  const idiom = sequelize.define('idiom', {
    idiom_name: DataTypes.STRING
  }, {
    timestamps: false
  });
  idiom.associate = function(models) {
    
  };
  return idiom;
};