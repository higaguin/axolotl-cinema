'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    country_name: DataTypes.STRING,
    iso: DataTypes.STRING
  }, {
    timestamps: false
  });
  Country.associate = function(models) {
    // associations can be defined here
  };
  return Country;
};