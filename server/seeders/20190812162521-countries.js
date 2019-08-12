'use strict';
const { createApolloFetch } = require('apollo-fetch');
const fetch = createApolloFetch({
  uri: 'https://countries.trevorblades.com/',
});

module.exports = {
  up: (queryInterface, Sequelize) => {

    return fetch({
      query: `{ 
        countries { 
          country_name: name
          iso: code
        } 
      }`,
    }).then(res => {
      return queryInterface.bulkInsert('Countries', res.data.countries);
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
