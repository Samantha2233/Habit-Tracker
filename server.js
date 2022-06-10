const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./server/Habit/typeDefs')
const resolvers = require('./server/Habit/resolvers')
const mongoose = require('mongoose')

async function startServer() {
  const app = express()
  const apolloServer = new ApolloServer({
    typeDefs, 
    resolvers
  })
  
  await apolloServer.start()
  apolloServer.applyMiddleware({ app: app })
  app.listen(4000, () => console.log('Server running on part 4000'))
  app.use((req, res) => res.send("Hello from express apollo server"))
  
  await mongoose.connect('mongodb+srv://sei.fusty.azure.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    dbName: 'blogDB',
    user: 'sami',
    pass: 'rUrE3gG1N6bn4Mhi', 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('Mongo DB connected!...'))
}

startServer()