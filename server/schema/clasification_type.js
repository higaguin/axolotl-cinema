const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const ClasificationType = new GraphQLObjectType({
    name: 'ClasificationType',
    fields: () => ({
      id: { type: GraphQLID },
      letter: { type: GraphQLString },
    })
  });
  
  module.exports = ClasificationType;