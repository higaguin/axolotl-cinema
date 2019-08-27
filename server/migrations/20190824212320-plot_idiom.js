'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('plot_idiom', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plot_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'titles',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      idiom_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'idioms',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      plot_name: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('plot_idiom');
  }
};
