'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movie_genre', {
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
      genre_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'genres',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movie_genre');
  }
};
