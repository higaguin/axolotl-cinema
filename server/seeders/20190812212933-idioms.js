'use strict';
const { createApolloFetch } = require('apollo-fetch');
const fetch = createApolloFetch({
  uri: 'https://countries.trevorblades.com/',
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return fetch({
      query: `{ 
        languages { 
          idiom_name: name
        } 
      }`,
    }).then(res => {
      return res.data.languages.filter(idiom => idiom.idiom_name != null);
    })
    .then(languages => {
      return queryInterface.bulkInsert('Idioms', languages);
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
