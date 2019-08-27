'use strict';
const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const titles = [
      {
        "original_name": "Spider-Man: Far from Home"
      },
      {
        "original_name": "The Lion King"
      },
    ];

    return queryInterface.bulkInsert('titles', titles).then(async () => { 
      const translations = [
        {
          "title_name": "Spider-Man: Lejos de casa",
          "title_id": await db.title.findOne({ where: {original_name: 'Spider-Man: Far from Home'} }).then(title => title.id),
          "idiom_id": await db.idiom.findOne({ where: {idiom_name: 'Spanish'} }).then(idiom => idiom.id)
        },
        {
          "title_name": "El Rey León",
          "title_id": await db.title.findOne({ where: {original_name: 'The Lion King'} }).then(title => title.id),
          "idiom_id": await db.idiom.findOne({ where: {idiom_name: 'Spanish'} }).then(idiom => idiom.id)
        }
      ];

      return queryInterface.bulkInsert('title_idiom', translations)
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
