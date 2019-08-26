const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const TitleIdiomType = new GraphQLObjectType({
    name: 'TitleIdiomType',
    fields: () => ({
      id: { type: GraphQLID },
      title_name: { type: GraphQLString }
    })
  });

module.exports = TitleIdiomType;