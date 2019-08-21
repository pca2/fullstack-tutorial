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

  # define Launch object type, pretty close to a table 
  type Launch {
    id: ID!
    # basic types like String are supported
    site: String
    #You can also use other objects as field types
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

`;
module.exports = typeDefs;
