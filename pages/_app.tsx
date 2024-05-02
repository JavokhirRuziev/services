import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/utils/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={apolloClient}>
			<ThemeProvider {...{ theme }}>
				<Component {...pageProps} />
			</ThemeProvider>
		</ApolloProvider>
	);
}
