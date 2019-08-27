const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const GenreType = new GraphQLObjectType({
    name: 'GenreType',
    fields: () => ({
      id: { type: GraphQLID },
      original_genre: { type: GraphQLString },
      translated: {
        type: require('./genre_idiom_type'),
        args: { idiom_id: { type: GraphQLID } },
        resolve(parentValue, { idiom_id }) {
          return db.genre_idiom.findOne({ where: { genre_id: parentValue.id, idiom_id } });
        }
      }
    })
  });
  
  module.exports = GenreType;