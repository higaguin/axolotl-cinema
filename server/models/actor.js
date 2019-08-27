'use strict';
module.exports = (sequelize, DataTypes) => {
  const actor = sequelize.define('actor', {
    artistic_name: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  actor.associate = function(models) {
    models.actor.belongsToMany(models.movie, {through: 'movie_actor', foreignKey: 'actor_id', timestamps: false});
  };
  return actor;
};