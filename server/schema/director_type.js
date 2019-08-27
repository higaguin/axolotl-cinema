const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const DirectorType = new GraphQLObjectType({
    name: 'DirectorType',
    fields: () => ({
      id: { type: GraphQLID },
      director_name: { type: GraphQLString },
    })
  });
  
  module.exports = DirectorType;