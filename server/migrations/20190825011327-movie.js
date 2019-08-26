'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', {
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
      plot_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'plots',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      clasification_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'clasifications',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      poster_image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies');
  }
};
