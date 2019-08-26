'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('idioms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idiom_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      in_system: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('idioms');
  }
};
