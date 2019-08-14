'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const states = [
      {
        "state_name": "Ciudad de México",
        "iso": "CMX",
        "country_id": "157"
      },
      {
        "state_name": "Querétaro",
        "iso": "QUE",
        "country_id": "157"
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
