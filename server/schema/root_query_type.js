const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const CountryType = require('./country_type');
const StateType = require('./state_type');
const TitleType = require('./title_type');
const MovieType = require('./movie_type');
const db = require('../models');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    countries: {
      type: new GraphQLList(CountryType),
      resolve() {
        return db.country.findAll();
      }
    },
    states: {
      type: new GraphQLList(StateType),
      resolve() {
        return db.state.findAll();
      }
    },
    titles: {
      type: new GraphQLList(TitleType),
      resolve() {
        return db.title.findAll();
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return db.movie.findAll();
      }
    }
  })
});

module.exports = RootQuery;