import { Box, Button, Container, Typography } from "@mui/material";
import { suggestions_arr } from "../../public/data/suggestions_data";
import CardLarge from "../Cards/CardLarge";
import React from "react";

export default () => {
	return (
		<Box
			sx={{
				bgcolor: "white"
			}}>
			<Box sx={wrapper}>
				<Container>
					<Typography variant="h2" mb={"34px"} textAlign={"center"}>
						Popular properties in Tashkent
					</Typography>
					<Box sx={cardWrapperStyle}>
						{suggestions_arr.map((el, index) => {
							return (
								<CardLarge
									{...{
										el,
										voucher: Boolean(index % 2 === 0)
									}}
									key={index}
								/>
							);
						})}
					</Box>
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Button color="primary" variant="outlined" size="large">
							View all properties in London
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
