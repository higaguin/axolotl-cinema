const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const CountryType = require('./country_type');
const StateType = require('./state_type');
const db = require('../models');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    countries: {
      type: new GraphQLList(CountryType),
      resolve() {
        return db.country.findAll();
      }
    },
    states: {
      type: new GraphQLList(StateType),
      resolve() {
        return db.state.findAll();
      }
    }
  })
});

module.exports = RootQuery;