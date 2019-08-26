'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const directors = [
      {
        "director_name": "Jon Watts"
      },
      {
        "director_name": "Jon Favreau"
      }
    ];

    return queryInterface.bulkInsert('directors', directors);
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
