'use strict';
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const halls = [
      {
        "number": 1,
        "theater_id": await db.theater.findOne({ where: {theater_name: 'Esfera'} }).then(theater => theater.id),
        "hall_type_id": await db.hall_type.findOne({ where: {type_name: 'Normal'} }).then(hall_type => hall_type.id)
      },
      {
        "number": 2,
        "theater_id": await db.theater.findOne({ where: {theater_name: 'Esfera'} }).then(theater => theater.id),
        "hall_type_id": await db.hall_type.findOne({ where: {type_name: 'Normal'} }).then(hall_type => hall_type.id)
      },
    ];

    return queryInterface.bulkInsert('halls', halls)
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
