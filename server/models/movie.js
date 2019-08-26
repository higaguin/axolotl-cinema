'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    title_id: DataTypes.INTEGER,
    poster_image: DataTypes.STRING
  }, {});
  movie.associate = function(models) {
    models.movie.belongsTo(models.title, {foreignKey: 'title_id'});
    models.movie.belongsTo(models.plot, {foreignKey: 'plot_id'});
    models.movie.belongsTo(models.clasification, {foreignKey: 'clasification_id'});
    models.movie.hasMany(models.function, { foreignKey: 'movie_id' });
    models.movie.belongsToMany(models.actor, {through: 'movie_actor', foreignKey: 'movie_id'});
    models.movie.belongsToMany(models.director, {through: 'movie_director', foreignKey: 'movie_id'});
    models.movie.belongsToMany(models.genre, {through: 'movie_genre', foreignKey: 'movie_id'});
    // state.hasOne(models.country, { foreignKey: 'country_id' });
    // models.State.hasOne(models.Country);
  };
  return movie;
};