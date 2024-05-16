import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";

export default function Layout({ children }: { children: any }) {
	return (
		<>
			<Header />
			<Box>{children}</Box>
			<Footer />
		</>
	);
}
