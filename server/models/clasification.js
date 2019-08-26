'use strict';
module.exports = (sequelize, DataTypes) => {
  const clasification = sequelize.define('clasification', {
    letter: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  clasification.associate = function(models) {
      
  };
  return clasification;
};