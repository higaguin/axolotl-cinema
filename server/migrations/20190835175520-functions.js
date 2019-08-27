'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('functions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movie_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'movies',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
      function_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('functions');
  }
};
