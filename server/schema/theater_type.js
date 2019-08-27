const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const TheaterType = new GraphQLObjectType({
    name: 'TheaterType',
    fields: () => ({
      id: { type: GraphQLID },
      theater_name: { type: GraphQLString, },
      direction: { type: GraphQLString },
      state: {
        type: require('./state_type'),
        resolve(parentValue) {
          return db.state.findByPk(parentValue.state_id).then(state => state);
        }
      }
    })
  });
  
  module.exports = TheaterType;