import Vue from 'vue'
import { ApolloClient, createNetworkInterface } from 'apollo-client'
// New Imports
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import VueApollo from 'vue-apollo'

// Create the network interface
const networkInterface = createNetworkInterface({
  uri: '/subapi/graphql',
  transportBatching: true,
})

// Create the subscription websocket client
const wsClient = new SubscriptionClient('ws://192.168.0.1:3020/subscriptions', {
  reconnect: true,
})

// Extend the network interface with the subscription client
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient,
)
/*
// Create the apollo client with the new network interface
const apolloClient = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  connectToDevTools: true,
})

// Install the plugin like before
Vue.use(VueApollo, {
  apolloClient,
})
*/
import App from './App'
import router from './router'
import store from './store'
// import apolloProvider from '../plugins/apollo'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // apolloProvider,
  router,
  store,
  template: '<App/>',
  components: { App }
})
