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

const TitleType = new GraphQLObjectType({
    name: 'TitleType',
    fields: () => ({
      id: { type: GraphQLID },
      original_name: { type: GraphQLString },
      translates: {
        type: new GraphQLList(TitleIdiomType),
        resolve(parentValue) {
            return parentValue.getTitle_idioms();
        //   return db.country.findByPk(parentValue.country_id).then(country => country);
        }
      }
    })
  });
  
  module.exports = TitleType;