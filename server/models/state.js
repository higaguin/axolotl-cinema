'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    state_name: DataTypes.STRING,
    iso: DataTypes.STRING,
    country_id: DataTypes.INTEGER
  }, {});
  State.associate = function(models) {
    // models.State.hasOne(models.Country);
  };
  return State;
};