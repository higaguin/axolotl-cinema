'use strict';
module.exports = (sequelize, DataTypes) => {
  const title_idiom = sequelize.define('title_idiom', {
    title_name: DataTypes.STRING,
  }, {
    timestamps: true,
    tableName: 'title_idiom'
  });
  title_idiom.associate = function(models) {
    models.title_idiom.belongsTo(models.title, { foreignKey: 'title_id' });
    // models.title_idiom.belongsTo(models.idiom, { foreignKey: 'idiom_id' });
  };
  return title_idiom;
};