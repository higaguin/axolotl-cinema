'use strict';
module.exports = (sequelize, DataTypes) => {
  const state = sequelize.define('state', {
    state_name: DataTypes.STRING,
    iso: DataTypes.STRING,
    country_id: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  state.associate = function(models) {
    // state.hasOne(models.country, { foreignKey: 'country_id' });
    // models.State.hasOne(models.Country);
  };
  return state;
};