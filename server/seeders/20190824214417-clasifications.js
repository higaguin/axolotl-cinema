'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const clasifications = [
      {
        "letter": "A"
      },
      {
        "letter": "B"
      },
    ];

    return queryInterface.bulkInsert('clasifications', clasifications);
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
