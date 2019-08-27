'use strict';
module.exports = (sequelize, DataTypes) => {
  const title = sequelize.define('title', {
    original_name: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  title.associate = function(models) {
    models.title.hasMany(models.title_idiom, { foreignKey: 'title_id' });
    // models.title.belongsToMany(models.idiom, {
    //     through: models.title_idiom,
    //     foreignKey: 'title_id',
    //     otherKey: 'idiom_id'
    // });
  };
  return title;
};