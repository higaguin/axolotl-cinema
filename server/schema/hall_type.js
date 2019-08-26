const graphql = require('graphql');
const db = require('../models');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const HallTypeType = new GraphQLObjectType({
    name: 'HallTypeType',
    fields: () => ({
        id: { type: GraphQLID },
        type_name: { type: GraphQLString }
    })
});

const HallType = new GraphQLObjectType({
    name: 'HallType',
    fields: () => ({
        id: { type: GraphQLID },
        number: { type: GraphQLString },
        theater: {
            type: require('./theater_type'),
            resolve(parentValue) {
                return db.theater.findByPk(parentValue.theater_id);
            }
        },
        hall_type: {
            type: HallTypeType,
            resolve(parentValue) {
                return db.hall_type.findByPk(parentValue.hall_type_id);
            }
        }
    })
  });
  
  module.exports = HallType;