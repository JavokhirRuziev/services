import BreadcrumbBase from "@/components/Breadcrumbs/BreadcrumbBase";
import Layout from "@/components/Layout";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SideBarEdit from "./components/SideBarEdit";
import EditContent from "./components/EditContent";

export default function edit() {
	return (
		<Layout>
			<Container>
				<Box sx={wrapperStyles}>
					<SideBarEdit />
					<EditContent />
				</Box>
			</Container>
		</Layout>
	);
}

const wrapperStyles = {
	m: "30px auto 200px",
	display: "flex",
	columnGap: "36px"
};
