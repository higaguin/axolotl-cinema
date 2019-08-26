const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const CountryType = new GraphQLObjectType({
    name: 'CountryType',
    fields: () => ({
      id: { type: GraphQLID },
      country_name: { type: GraphQLString },
      iso: { type: GraphQLString },
      states: {
        type: new GraphQLList(require('./state_type')),
        resolve(parentValue){
          return parentValue.getStates();
        }
      }
    })
  });
  
  module.exports = CountryType;