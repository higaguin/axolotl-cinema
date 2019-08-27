const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const StateType = new GraphQLObjectType({
    name: 'StateType',
    fields: () => ({
      id: { type: GraphQLID },
      state_name: { type: GraphQLString, },
      iso: { type: GraphQLString },
      country: {
        type: require('./country_type'),
        resolve(parentValue) {
          return db.country.findByPk(parentValue.country_id).then(country => country);
        }
      }
    })
  });
  
  module.exports = StateType;