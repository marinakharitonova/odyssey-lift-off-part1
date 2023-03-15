const { gql } = require("apollo-server");

const typeDefs = gql`
    # Schema definitions go here

    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
        "Fetch a specific track, provided a track's ID"
        track(id: ID!): Track
        "Fetch a specific module, provided a module's ID"
        module(id: ID!): Module!
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
        "The track's complete description, can be in Markdown format"
        description: String
        "The number of times a track has been viewed"
        numberOfViews: Int
        "The track's complete array of Modules"
        modules: [Module!]!
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

    "A Module is a single unit of teaching. Multiple Modules compose a Track"
    type Module {
        id: ID!
        "The Module's title"
        title: String!
        "The Module's length in minutes"
        length: Int
        "The Module's content text"
        content: String
        "url to the module's video"
        videoUrl: String
    }
`;
module.exports = typeDefs;