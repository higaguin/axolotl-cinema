const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const mutation = new GraphQLObjectType({
    name: 'Mutation',
});

module.exports = mutation;