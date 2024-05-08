import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";

export default ({ children }: { children: any }) => {
	return (
		<>
			<Header />
			<Box>{children}</Box>
			<Footer />
		</>
	);
};
