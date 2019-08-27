'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const hall_types = [
      {
        "type_name": "Normal"
      },
      {
        "type_name": "IMAX"
      },
      {
        "type_name": "3D"
      }
    ];

    return queryInterface.bulkInsert('hall_types', hall_types)
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
