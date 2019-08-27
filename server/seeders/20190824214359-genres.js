'use strict';
const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const genres = [
      {
        "original_genre": "Action"
      },
      {
        "original_genre": "Adventure"
      },
    ];

    return queryInterface.bulkInsert('genres', genres).then(async () => { 
      const genre_idiom = [
        {
          "genre_name": "Acción",
          "genre_id": await db.genre.findOne({ where: {original_genre: "Action"} }).then(genre => genre.id),
          "idiom_id": await db.idiom.findOne({ where: {idiom_name: 'Spanish'} }).then(idiom => idiom.id)
        },
        {
          "genre_name": "Aventura",
          "genre_id": await db.genre.findOne({ where: {original_genre: "Adventure"} }).then(genre => genre.id),
          "idiom_id": await db.idiom.findOne({ where: {idiom_name: 'Spanish'} }).then(idiom => idiom.id)
        }
      ];

      return queryInterface.bulkInsert('genre_idiom', genre_idiom)
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
