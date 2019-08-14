'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    title_id: DataTypes.INTEGER
  }, {});
  movie.associate = function(models) {
    models.movie.belongsTo(models.title, {foreignKey: 'title_id'});
    // state.hasOne(models.country, { foreignKey: 'country_id' });
    // models.State.hasOne(models.Country);
  };
  return movie;
};