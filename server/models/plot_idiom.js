'use strict';
module.exports = (sequelize, DataTypes) => {
  const plot_idiom = sequelize.define('plot_idiom', {
    plot_name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'plot_idiom'
  });
  plot_idiom.associate = function(models) {
    models.plot_idiom.belongsTo(models.plot, { foreignKey: 'plot_id' });
    models.plot_idiom.belongsTo(models.idiom, { foreignKey: 'idiom_id' });
  };
  return plot_idiom;
};