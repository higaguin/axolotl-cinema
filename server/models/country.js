'use strict';
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {
    country_name: DataTypes.STRING,
    iso: DataTypes.STRING
  }, {
    timestamps: false
  });
  country.associate = function(models) {
    models.country.hasMany(models.state, { foreignKey: 'country_id' });
    // associations can be defined here
  };
  return country;
};