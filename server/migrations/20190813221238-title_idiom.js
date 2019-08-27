'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('title_idiom', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title_id: {
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
      title_name: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('title_idiom');
  }
};
