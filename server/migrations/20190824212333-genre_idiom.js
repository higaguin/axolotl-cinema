'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('genre_idiom', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      genre_name: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('genre_idiom');
  }
};
