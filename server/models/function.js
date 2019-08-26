'use strict';
module.exports = (sequelize, DataTypes) => {
  const _function = sequelize.define('function', {
    movie_id: DataTypes.INTEGER,
    hall_id: DataTypes.INTEGER,
    idiom_id: DataTypes.INTEGER,
    function_date: DataTypes.DATE
  }, {
    timestamps: false
  });
  _function.associate = function(models) {
    models.function.belongsTo(models.movie, {foreignKey: 'movie_id'});
    models.function.belongsTo(models.hall, {foreignKey: 'hall_id'});
    models.function.belongsTo(models.idiom, {foreignKey: 'idiom_id'});
    // models.function.belongsTo(models.theater, { through: 'halls', otherKey: 'theater_id'})
    // User.belongsToMany(Project, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'userId', otherKey: 'projectId'})
  };
  return _function;
};