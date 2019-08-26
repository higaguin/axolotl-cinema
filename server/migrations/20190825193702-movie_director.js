'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movie_director', {
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
      director_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'directors',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movie_director');
  }
};
