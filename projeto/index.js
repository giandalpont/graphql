const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const resolvers = require('./resolvers/Index')
const schemaPath = './schema/index.graphql'

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen().then(( url )=>{
    console.log(`this: ${url}`)
})
