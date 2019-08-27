'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seat_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      coordinate_x: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      coordinate_y: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hall_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'halls',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('seats');
  }
};
