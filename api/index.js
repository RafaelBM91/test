const express = require('express')
const http = require('http')
const path = require('path')
const graphqlHTTP = require('express-graphql')

const {
  graphqlExpress,
  graphiqlExpress,
} = require('apollo-server-express')
const { execute, subscribe } = require('graphql')
const { SubscriptionServer } = require('subscriptions-transport-ws')

const cors = require('cors')
const bodyParser = require('body-parser')

const MyGraphQLSchema = require('./graphqlSchema')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const Server = http.createServer(app)

/*app.use('/graphql', graphqlHTTP({
  schema: MyGraphQLSchema,
  graphiql: true
}))*/

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: MyGraphQLSchema
}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://192.168.0.1:9090/subscriptions`
}))

new SubscriptionServer({
  execute,
  subscribe,
  schema: MyGraphQLSchema
}, {
  server: Server,
  path: '/subscriptions',
});

Server.listen(9090, () => {
  console.log('Server listen :9090')
})
