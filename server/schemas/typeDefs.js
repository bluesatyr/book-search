const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        _id: ID!
        bookId: String
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: SaveBookInput!) : User
        removeBook(bookId: String!): User
    }

    input SaveBookInput {
        authors: [String]
        description: String!
        title: String!
        bookId: String!
        image: String
        link: String
    }
`;

// Query is the Read operation of CRUD; Mutation takes care of Create, Update and Delete

module.exports = typeDefs;
