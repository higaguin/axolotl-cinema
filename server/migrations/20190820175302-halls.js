'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('halls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      theater_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'theaters',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      hall_type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'hall_types',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('halls');
  }
};
