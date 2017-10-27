import Vue from 'vue'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { Client } from 'subscriptions-transport-ws'
import VueApollo, { addGraphQLSubscriptions } from 'vue-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3020/graphql',
  transportBatching: true,
})

const wsClient = new Client('ws://localhost:3020/subscriptions')

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient,
)

const apolloClient = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
})

Vue.use(VueApollo, {
  apolloClient,
})

Vue.mixin({ apolloProvider })

export default apolloProvider
