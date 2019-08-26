const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const ActorType = new GraphQLObjectType({
    name: 'ActorType',
    fields: () => ({
      id: { type: GraphQLID },
      artistic_name: { type: GraphQLString },
    })
  });
  
  module.exports = ActorType;