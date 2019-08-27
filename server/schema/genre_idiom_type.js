const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const GenreIdiomType = new GraphQLObjectType({
    name: 'GenreIdiomType',
    fields: () => ({
      id: { type: GraphQLID },
      genre_name: { type: GraphQLString }
    })
  });

module.exports = GenreIdiomType;