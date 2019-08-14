const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const MovieType = new GraphQLObjectType({
    name: 'MovieType',
    fields: () => ({
      id: { type: GraphQLID },
      title: {
        type: require('./title_type'),
        resolve(parentValue) {
          return db.title.findByPk(parentValue.title_id).then(title => title);
        }
      }
    })
  });
  
  module.exports = MovieType;