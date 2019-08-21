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

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    #Not null array of Launch objects
    trips: [Launch]!
  }

  type Mission {
    name: String
    #fields can take arguments as well
    # the arguments correspond to an enum type
    missionPatch(size: PatchSize): String
  }
  
  # The available options for the MissionPatch arguments
  enum PatchSize {
    SMALL
    LARGE
  }
  
  type Mutation {
    #takes in an an array of IDs and returns a TripUpdateResponse
    #which is its own object type
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    #takes in just a single ID and returns a TripUpdateResponse
    cancelTrip(launchId: ID!): TripUpdateResponse!

    login(email: String): String # login token
  }



  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }

`;

module.exports = typeDefs;
