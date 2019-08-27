const graphql = require('graphql');
const graphql_date = require('graphql-iso-date');
const db = require('../models');
const { GraphQLDate, GraphQLTime, GraphQLDateTime } = graphql_date;
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const FunctionType = new GraphQLObjectType({
    name: 'FunctionType',
    fields: () => ({
        id: { type: GraphQLID },
        movie: {
            type: require('./movie_type'),
            resolve(parentValue) {
                return db.movie.findByPk(parentValue.movie_id);
            }
        },
        hall: {
            type: require('./hall_type'),
            resolve(parentValue) {
                return db.hall.findByPk(parentValue.hall_id);
            }
        },
        idiom: {
            type: require('./idiom_type'),
            resolve(parentValue) {
                return db.idiom.findByPk(parentValue.idiom_id);
            }
        },
        function_date: { type: GraphQLDateTime },
        function_only_date: {
            type: GraphQLDate,
            resolve(parentValue) {
                return parentValue.function_date;
            }
        },
        function_only_time: {
            type: GraphQLTime,
            resolve(parentValue) {
                return parentValue.function_date;
            }
        }
    })
  });
  
  module.exports = FunctionType;