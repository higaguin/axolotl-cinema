'use strict';
const { createApolloFetch } = require('apollo-fetch');
const fetch = createApolloFetch({
  uri: 'https://countries.trevorblades.com/',
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    const idiom_in_system = [ 'Spanish', 'English' ];

    return fetch({
      query: `{ 
        languages { 
          idiom_name: name
        } 
      }`,
    }).then(res => {
      return res.data.languages.filter(idiom => idiom.idiom_name != null);
    }).then(languages => {
      return languages.map(idiom => { return { idiom_name: idiom.idiom_name, in_system: idiom_in_system.some(idiomx => idiom.idiom_name == idiomx) } });
    })
    .then(languages => {
      return queryInterface.bulkInsert('idioms', languages);
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
