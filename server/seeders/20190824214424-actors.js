'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const actors = [
      {
        "artistic_name": "Tom Holland"
      },
      {
        "artistic_name": "Jake Gyllenhaal"
      },
      {
        "artistic_name": "Donald Glover"
      },
      {
        "artistic_name": "Beyoncé"
      },
    ];

    return queryInterface.bulkInsert('actors', actors);
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
