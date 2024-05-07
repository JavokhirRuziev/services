import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";

// https://f22a-95-214-211-159.ngrok-free.app/graphql apiurl
const httpLink = new HttpLink({
<<<<<<< HEAD
  uri: "https://f22a-95-214-211-159.ngrok-free.app/graphql apiurl",
});

const wsClient = createClient({
  url: "wss://f22a-95-214-211-159.ngrok-free.app/graphql apiurl",
=======
	uri: "https://f22a-95-214-211-159.ngrok-free.app/graphql apiurl"
});

const wsClient = createClient({
	url: "wss://f22a-95-214-211-159.ngrok-free.app/graphql apiurl"
>>>>>>> main
});

const wsLink = new GraphQLWsLink(wsClient);

const splitLink = split(
<<<<<<< HEAD
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
=======
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

export const apolloClient = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache()
>>>>>>> main
});
