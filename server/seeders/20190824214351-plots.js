'use strict';
const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const plots = [
      {
        "original_plot": "Following the events of Endgame, Spider-Man must step up to take on new threats in a world that has changed forever."
      },
      {
        "original_plot": "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery."
      },
    ];

    return queryInterface.bulkInsert('plots', plots).then(async () => { 
      const plot_idiom = [
        {
          "plot_name": `Después de los eventos de Endgame, 
          Spider-Man debe de lidiar con nuevas amenazas en un munda que ha cambiado para siempre.`,
          "plot_id": await db.plot.findOne({ where: {original_plot: "Following the events of Endgame, Spider-Man must step up to take on new threats in a world that has changed forever."} }).then(plot => plot.id),
          "idiom_id": await db.idiom.findOne({ where: {idiom_name: 'Spanish'} }).then(idiom => idiom.id)
        },
        {
          "plot_name": `Después del asesinato de su padre, un joven león principe se desprende
          de su reino solo para aprender el verdadero significado de la responsabilidad y la valentía.`,
          "plot_id": await db.plot.findOne({ where: {original_plot: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery."} }).then(plot => plot.id),
          "idiom_id": await db.idiom.findOne({ where: {idiom_name: 'Spanish'} }).then(idiom => idiom.id)
        }
      ];

      return queryInterface.bulkInsert('plot_idiom', plot_idiom)
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
