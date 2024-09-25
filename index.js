const dotenv = require('dotenv');
dotenv.config({path: 'config.env'});

const connectDB = require('./db')
const { ApolloServer } = require('apollo-server');

connectDB();

/***
 * 
 * Apollo Server contains 2 things:
 * 1. typeDef - GraphQL type definition
 * 2. resolvers - How we resolve queries / mutations
 * 
 */

const typeDefs = require('./graphql/typeDefs')
const resolvers  = require('./graphql/resolvers')

const server  = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({port: 5050})
    .then((res) =>{
        console.log(`Server listening on ${res.url}`)
    })