const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const MovieType = new GraphQLObjectType({
    name: 'MovieType',
    fields: () => ({
      id: { type: GraphQLID },
      title: {
        type: require('./title_type'),
        // args: { idiom_id: { type: GraphQLID } },
        resolve(parentValue) {
          return db.title.findOne({ where: { id: parentValue.title_id } });
        }
      },
      plot: {
        type: require('./plot_type'),
        resolve(parentValue) {
          return db.plot.findOne({ where: { id: parentValue.plot_id } });
        }
      },
      clasification: {
        type: require('./clasification_type'),
        resolve(parentValue) {
          return db.clasification.findOne({ where: { id: parentValue.clasification_id } });
        }
      },
      genres: {
        type: new GraphQLList(require('./genre_type')),
        resolve(parentValue) {
          return db.genre.findAll({ include: [{ model: db.movie, where: { id: parentValue.id } }] });
        }
      },
      actors: {
        type: new GraphQLList(require('./actor_type')),
        resolve(parentValue) {
          return db.actor.findAll({ include: [{ model: db.movie, where: { id: parentValue.id } }] });
        }
      },
      directors: {
        type: new GraphQLList(require('./director_type')),
        resolve(parentValue) {
          return db.director.findAll({ include: [{ model: db.movie, where: { id: parentValue.id } }] });
        }
      },
      functions: {
        type: new GraphQLList(require('./function_type'))
      },
      poster_image: { type: GraphQLString }
    })
  });
  
  module.exports = MovieType;