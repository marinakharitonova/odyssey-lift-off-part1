const { gql } = require("apollo-server");

const typeDefs = gql`
    # Schema definitions go here

    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        "the track's id"
        id: ID!
        "the track's title"
        title: String!
        "the track's author"
        author: Author!
        "the track's thumbnail url"
        thumbnail: String
        "the track's length in minutes"
        length: Int
        "the count of modules track contains"
        modulesCount: Int
    }

    "Author of a complete Track or a Module"
    type Author {
        "the author's id"
        id: ID!
        "the author's name"
        name: String!
        "the author's photo url"
        photo: String
    }
`;
module.exports = typeDefs;