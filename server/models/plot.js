'use strict';
module.exports = (sequelize, DataTypes) => {
  const plot = sequelize.define('plot', {
    original_plot: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  plot.associate = function(models) {
    models.plot.hasMany(models.plot_idiom, { foreignKey: 'plot_id' });
    // models.title.belongsToMany(models.idiom, {
    //     through: models.title_idiom,
    //     foreignKey: 'title_id',
    //     otherKey: 'idiom_id'
    // });
  };
  return plot;
};