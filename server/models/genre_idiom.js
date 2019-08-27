'use strict';
module.exports = (sequelize, DataTypes) => {
  const genre_idiom = sequelize.define('genre_idiom', {
    genre_name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'genre_idiom'
  });
  genre_idiom.associate = function(models) {
    console.log(models.genre_idiom);
    models.genre_idiom.belongsTo(models.genre, { foreignKey: 'genre_id' });
    models.genre_idiom.belongsTo(models.idiom, { foreignKey: 'idiom_id' });
  };
  return genre_idiom;
};