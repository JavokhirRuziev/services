import Layout from "@/components/Layout";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SideBar from "./components/SideBar";
import Content from "./components/Content";

export default function profile() {
	return (
		<Layout>
			<Container>
				<Box sx={wrapperStyles}>
					<SideBar />
					<Content />
				</Box>
			</Container>
		</Layout>
	);
}

const wrapperStyles = {
	m: "30px auto 200px",
	display: "flex",
	columnGap: "70px"
};
