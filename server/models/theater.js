'use strict';
module.exports = (sequelize, DataTypes) => {
  const theater = sequelize.define('theater', {
    theater_name: DataTypes.STRING,
    direction: DataTypes.STRING,
    state_id: DataTypes.INTEGER
  }, {});
  theater.associate = function(models) {
    models.theater.belongsTo(models.state, {foreignKey: 'state_id'});
    models.theater.hasMany(models.hall, { foreignKey: 'theater_id' });
    // state.hasOne(models.country, { foreignKey: 'country_id' });
    // models.State.hasOne(models.Country);
  };
  return theater;
};