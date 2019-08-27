const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const IdiomType = new GraphQLObjectType({
    name: 'IdiomType',
    fields: () => ({
      id: { type: GraphQLID },
      idiom_name: { type: GraphQLString },
    })
  });
  
  module.exports = IdiomType;