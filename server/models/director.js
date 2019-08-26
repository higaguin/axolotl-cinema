'use strict';
module.exports = (sequelize, DataTypes) => {
  const director = sequelize.define('director', {
    director_name: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  director.associate = function(models) {
    models.director.belongsToMany(models.movie, {through: 'movie_director', foreignKey: 'director_id', timestamps: false});
  };
  return director;
};