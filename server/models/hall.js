'use strict';
module.exports = (sequelize, DataTypes) => {
  const hall = sequelize.define('hall', {
    number: DataTypes.INTEGER,
    theater_id: DataTypes.INTEGER,
    hall_type_id: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  hall.associate = function(models) {
    models.hall.belongsTo(models.theater, {foreignKey: 'theater_id'});
    models.hall.belongsTo(models.hall_type, {foreignKey: 'hall_type_id'});
    models.hall.hasMany(models.function, { foreignKey: 'hall_id' });
  };
  return hall;
};