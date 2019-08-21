const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    #launches query returns not null array of Launch  objects
    # The bang indicates not null
    launches: [Launch]!
    #launch query returns single Launch object based on id parameter
    launch(id: ID!): Launch
    # Returns User object for current user 
    me: User
  }


`;
module.exports = typeDefs;
