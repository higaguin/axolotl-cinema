'use strict';
module.exports = (sequelize, DataTypes) => {
  const hall_type = sequelize.define('hall_type', {
    type_name: DataTypes.STRING
  }, {
    timestamps: false
  });
  hall_type.associate = function(models) {

  };
  return hall_type;
};