import Layout from "@/components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SideBar from "./components/SideBar";
import { theme } from "@/theme";

export default function profile() {
	return (
		<Layout>
			<Container>
				<Box
					sx={{
						m: "30px auto 200px",
						display: "flex",
						columnGap: "70px"
					}}>
					<SideBar />
					<Box sx={{ width: "100%", maxWidth: 680 }}>
						<Typography variant="h4" mb={2}>
							More about me
						</Typography>
						<Box sx={wrapperStyles}>
							<Box>
								<Typography variant="h6" color={"grey.600"}>
									Location
								</Typography>
								<Typography variant="h6" color={"grey.600"}>
									Tashkent, Uzbekistan
								</Typography>
							</Box>
							<Box>
								<Typography variant="h6" color={"grey.600"}>
									CityShahar since
								</Typography>
								<Typography variant="h6" color={"grey.600"}>
									May 2024
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Container>
		</Layout>
	);
}

const wrapperStyles = {
	p: "20px 40px",
	border: `1px solid ${theme.palette.grey[400]}`,
	borderRadius: "10px",
	display: "flex",
	justifyContent: "space-between",
	width: "100%"
};
