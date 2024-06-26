import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import { suggestions_arr } from "@/public/data/suggestions_data";
import CardLarge from "@/components/Cards/CardLarge";

export default () => {
	return (
		<Box>
			<Box sx={wrapper}>
				<Container>
					<Typography variant="h2" mb={"25px"} ml={4}>
						Similar properties
					</Typography>

					<Box sx={cardWrapperStyle}>
						{suggestions_arr.slice(0, 3).map((el, index) => {
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
	}
};

const cardWrapperStyle = {
	display: "flex",
	flexWrap: "wrap",
	columnGap: "24px",
	rowGap: "30px",
	justifyContent: "center",
	mb: 5
};
