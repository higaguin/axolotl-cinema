'use strict';
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const theaters = [
      {
        "theater_name": "Esfera",
        "direction": "Km. 0.600, Celaya - Querétaro 5501, La Granja, 76180",
        "state_id": await db.state.findOne({ where: {iso: 'QUE'} }).then(state => state.id)
      },
      {
        "theater_name": "La Victoria",
        "direction": "zona dos extendida, Mercurio, 76040",
        "state_id": await db.state.findOne({ where: {iso: 'QUE'} }).then(state => state.id)
      }
    ];

    return queryInterface.bulkInsert('theaters', theaters)
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
