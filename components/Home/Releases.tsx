import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { suggestions_arr } from "../../public/data/suggestions_data";
import CardLarge from "../Cards/CardLarge";
import React from "react";
import Image from "next/image";

export default () => {
	return (
		<Box bgcolor={"white"}>
			<Box sx={wrapper} className="releases">
				<Container sx={{ position: "relative", zIndex: 1 }}>
					<Image
						src={"/images/new.png"}
						width={205}
						height={88}
						alt="new"
						style={imgaeStyles}
					/>
					<Typography variant="h2" mb={0.5}>
						New Releases
					</Typography>
					<Typography variant="h5" mb={"25px"} color={"grey.600"}>
						Get instant updates on new properties, new landlords and
						re-published popular rooms
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

const imgaeStyles: React.CSSProperties = {
	position: "absolute",
	transform: "rotate(25deg)",
	right: -80,
	top: 50,
	zIndex: -1,
	opacity: 0.5
};
