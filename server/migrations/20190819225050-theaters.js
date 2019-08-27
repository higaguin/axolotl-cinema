'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('theaters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      theater_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      direction: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'states',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('theaters');
  }
};
