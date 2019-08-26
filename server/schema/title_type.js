const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const TitleType = new GraphQLObjectType({
    name: 'TitleType',
    fields: () => ({
      id: { type: GraphQLID },
      original_name: { type: GraphQLString },
      // translates: {
      //   type: new GraphQLList(require('./title_idiom_type')),
      //   resolve(parentValue) {
      //       return parentValue.getTitle_idioms();
      //   }
      // },
      translated: {
        type: require('./title_idiom_type'),
        args: { idiom_id: { type: GraphQLID } },
        resolve(parentValue, { idiom_id }) {
          return db.title_idiom.findOne({ where: { title_id: parentValue.id, idiom_id } });
        }
      }
    })
  });
  
  module.exports = TitleType;