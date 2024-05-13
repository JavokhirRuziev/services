import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="/fonts/stylesheet.css" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<title>CityShahar</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
