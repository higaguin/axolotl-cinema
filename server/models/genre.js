'use strict';
module.exports = (sequelize, DataTypes) => {
  const genre = sequelize.define('genre', {
    original_genre: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  genre.associate = function(models) {
    models.genre.hasMany(models.genre_idiom, { foreignKey: 'genre_id' });
    models.genre.belongsToMany(models.movie, {through: 'movie_genre', foreignKey: 'genre_id', timestamps: false});
    // models.title.belongsToMany(models.idiom, {
    //     through: models.title_idiom,
    //     foreignKey: 'title_id',
    //     otherKey: 'idiom_id'
    // });
  };
  return genre;
};