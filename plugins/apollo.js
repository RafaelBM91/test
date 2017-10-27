import Vue from 'vue'
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    uri: 'http://localhost:3020/graphql',
  }),
  connectToDevTools: true,
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

export default apolloProvider