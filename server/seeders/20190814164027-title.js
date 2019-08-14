'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('titles', [{
      "original_name": "Spider-Man: Far from Home"
    }]).then(() => { return queryInterface.bulkInsert('title_idiom', [{
      "title_name": "Spider-Man: Lejos de casa",
      "title_id": "1",
      "idiom_id": "1"
    }]) });
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
