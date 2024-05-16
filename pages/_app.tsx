import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/utils/apolloClient";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={apolloClient}>
			<ThemeProvider {...{ theme }}>
				<Head>
					<title>CityShahar</title>
				</Head>
				<ToastContainer />
				<Component {...pageProps} />
			</ThemeProvider>
		</ApolloProvider>
	);
}
