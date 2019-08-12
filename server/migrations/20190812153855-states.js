'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('States', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      state_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      iso: {
        allowNull: false,
        type: Sequelize.STRING
      },
      country_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'Countries',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('States');
  }
};
