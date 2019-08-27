const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const PlotType = new GraphQLObjectType({
    name: 'PlotType',
    fields: () => ({
      id: { type: GraphQLID },
      original_plot: { type: GraphQLString },
      translated: {
        type: require('./plot_idiom_type'),
        args: { idiom_id: { type: GraphQLID } },
        resolve(parentValue, { idiom_id }) {
          return db.plot_idiom.findOne({ where: { plot_id: parentValue.id, idiom_id } });
        }
      }
    })
  });
  
  module.exports = PlotType;