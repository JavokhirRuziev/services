import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { suggestions_arr } from "../../public/data/suggestions_data";
import CardLarge from "../Cards/CardLarge";
import React from "react";

export default () => {
	return (
		<Box className="wrapper">
			{/* <Box className="budget" /> */}
			<Box sx={wrapper}>
				<Container>
					<Typography variant="h2" mb={0.5}>
						Budget-friendly Privacy
					</Typography>
					<Typography variant="h5" mb={"25px"} color={"grey.600"}>
						Enjoy a comfortable stay in your own private space
					</Typography>
					<Box sx={cardWrapperStyle}>
						{suggestions_arr.map((el, index) => {
							return (
								<CardLarge
									{...{
										el,
										voucher: Boolean(index % 2 !== 0)
									}}
									key={index}
									isCheap
								/>
							);
						})}
					</Box>
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Button color="primary" variant="outlined" size="large">
							Find out more
						</Button>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

const wrapper = {
	p: {
		mobile: "25px 0 50px",
		tablet: "40px 0 125px",
		desktop: "70px 0px"
	},
	bgcolor: "grey.100"
};

const cardWrapperStyle = {
	display: "flex",
	flexWrap: "wrap",
	columnGap: "24px",
	rowGap: "30px",
	justifyContent: "center",
	mb: 5
};
