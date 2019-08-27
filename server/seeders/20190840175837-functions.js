'use strict';
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const functions = [
      {
        "movie_id": await db.movie.findOne({ include: [{ model: db.title, where: { original_name: 'Spider-Man: Far from Home' } }] }).then(movie => movie.id),
        "hall_id": await db.hall.findOne({ where: {number: 1}, include: [{ model: db.theater, where: { theater_name: 'Esfera' } }] }).then(hall => hall.id),
        "idiom_id": await db.idiom.findOne({ where: {idiom_name: 'Spanish'} }).then(idiom => idiom.id),
        "function_date": new Date('2019-10-25T16:00:00.116Z').toISOString()
      },
      {
        "movie_id": await db.movie.findOne({ include: [{ model: db.title, where: { original_name: 'The Lion King' } }] }).then(movie => movie.id),
        "hall_id": await db.hall.findOne({ where: {number: 2}, include: [{ model: db.theater, where: { theater_name: 'Esfera' } }] }).then(hall => hall.id),
        "idiom_id": await db.idiom.findOne({ where: {idiom_name: 'Spanish'} }).then(idiom => idiom.id),
        "function_date": new Date('2019-10-25T13:00:00.116Z').toISOString()
      }
    ];

    return queryInterface.bulkInsert('functions', functions)
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
