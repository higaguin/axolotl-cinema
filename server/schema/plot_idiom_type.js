const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const PlotIdiomType = new GraphQLObjectType({
    name: 'PlotIdiomType',
    fields: () => ({
      id: { type: GraphQLID },
      plot_name: { type: GraphQLString }
    })
  });

module.exports = PlotIdiomType;