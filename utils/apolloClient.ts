import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";

// https://lobster-app-mak35.ondigitalocean.app/graphql

const httpLink = new HttpLink({
	uri: "https://lobster-app-mak35.ondigitalocean.app/graphql"
});

const wsClient = createClient({
	url: "wss://lobster-app-mak35.ondigitalocean.app/graphql"
});

const wsLink = new GraphQLWsLink(wsClient);

const splitLink = split(
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
});
