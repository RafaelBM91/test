const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLString
} = require('graphql')

const { PubSub } = require('graphql-subscriptions')

const array = []

const Register = new GraphQLObjectType({
  name:"Register",
  fields: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    timezone: { type: GraphQLString },
    category: { type: GraphQLString }
  }
})

const Query = new GraphQLObjectType({
  name:"Query",
  fields: {
    test: {
      description:"test",
      type: new GraphQLList(Register),
      args: {},
      resolve: (_,{},rootValue) => array
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
		register: {
			description: 'reguister',
			type: Register,
			args: {
				email: { type: new GraphQLNonNull(GraphQLString) },
				password: { type: new GraphQLNonNull(GraphQLString) },
				timezone: { type: new GraphQLNonNull(GraphQLString) },
				category: { type: new GraphQLNonNull(GraphQLString) },
			},
			resolve: (_,args) => {
        array.push(args)
        return args
      }
		}
  }
})

const Subscription = new GraphQLObjectType({
  name: "Subscription",
  fields: {
    test: {
      description:"test",
      type: new GraphQLList(Register),
      args: {},
      resolve: (_,{},rootValue) => array
    },
    insert: {
      description:"test",
      type: GraphQLString,
      resolve: (payload) => {
        console.log(payload)
        return "Hello Subscribe"
      },
      subscribe: () => pubsub.asyncIterator('insert')
    }
  }
})

module.exports = new GraphQLSchema({
  query: Query,
	mutation: Mutation,
  subscription: Subscription
})