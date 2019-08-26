const graphql = require('graphql');
const graphql_date = require('graphql-iso-date');
const { GraphQLDate, GraphQLTime, GraphQLDateTime } = graphql_date;
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const CountryType = require('./country_type');
const StateType = require('./state_type');
const TitleType = require('./title_type');
const MovieType = require('./movie_type');
const HallType = require('./hall_type');
const FunctionType = require('./function_type');
const TheaterType = require('./theater_type');
const IdiomType = require('./idiom_type');
const db = require('../models');

const { Op } = Sequelize = require('sequelize');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    countries: {
      type: new GraphQLList(CountryType),
      resolve() {
        return db.country.findAll();
      }
    },
    countries_has_states: {
      type: new GraphQLList(CountryType),
      resolve() {
        return db.country.findAll({
          include: [{ model: db.state, required: true }]
        });
      }
    },
    states_of_country: {
      type: new GraphQLList(StateType),
      args: { iso: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, { iso }) {
        return db.state.findAll({ include: [{ model: db.country, where: { iso } }] });
      }
    },
    theaters_of_state: {
      type: new GraphQLList(TheaterType),
      args: { iso: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, { iso }) {
        return db.theater.findAll({ include: [{ model: db.state, where: { iso } }] });
      }
    },
    movies_of_theater: {
      type: new GraphQLList(MovieType),
      args: { theater_id: { type: new GraphQLNonNull(GraphQLID) }, search_date: { type: new GraphQLNonNull(GraphQLDate) } },
      resolve(parentValue, { theater_id, search_date }) {
        return db.movie.findAll({
          include: [
          { model: db.function, required: true,
            where: { function_date: {
              [Op.gte]: new Date(search_date),
              [Op.lt]: new Date(new Date(search_date).getTime()+(1*24*60*60*1000))
            } },
            include: [{ model: db.hall, where: { theater_id } }] },
          // { model: db.title, 
          //   include: [{ model: db.title_idiom, where: { idiom_id }, required: false, }] 
          // }
        ] });
      }
    },
    idioms_in_system: {
      type: new GraphQLList(IdiomType),
      resolve(parentValue) {
        return db.idiom.findAll({ where: { in_system: true } });
      }
    },
    functions: {
      type: new GraphQLList(FunctionType),
      resolve(parentValue) {
        return db.function.findAll();
      }
    },
    halls: {
      type: new GraphQLList(HallType),
      resolve(parentValue) {
        return db.hall.findAll();
      }
    },
    theaters: {
      type: new GraphQLList(TheaterType),
      resolve(parentValue) {
        return db.theater.findAll();
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
    },
    movie: {
      type: MovieType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return db.movie.findByPk(id);
      }
    },
    function: {
      type: FunctionType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id, idiom_id }) {
        return db.function.findOne({ where: { id }});
      }
    }
  })
});

module.exports = RootQuery;