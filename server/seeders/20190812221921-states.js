'use strict';
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const states = [
      {
        "state_name": "Ciudad de México",
        "iso": "CMX",
        "country_id": await db.country.findOne({ where: {iso: 'MX'} }).then(country => country.id)
      },
      {
        "state_name": "Querétaro",
        "iso": "QUE",
        "country_id": await db.country.findOne({ where: {iso: 'MX'} }).then(country => country.id)
      }
    ];

    return queryInterface.bulkInsert('states', states);
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
