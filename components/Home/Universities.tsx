import { Box, Button, Container, Typography } from "@mui/material";
import { suggestions_arr } from "../../public/data/suggestions_data";
import CardBase from "../Cards/CardBase";
import Shield from "@/public/icons/Shield";
import React from "react";
import Order from "@/public/icons/Order";
import Certificate from "@/public/icons/Certificate";
import Image from "next/image";

export default () => {
	return (
		<Box className="wrapper">
			<Box className="popular" />
			<Box sx={wrapper}>
				<Container>
					<Typography variant="h2" mb={2}>
						Popular universities
					</Typography>
					<Box sx={stickersWrapper}>
						{stickersArr.map((el, index) => (
							<Box key={index} sx={contentWrapper}>
								{el.icon}
								<Typography
									variant="body2"
									fontSize={"12px !important"}>
									{el?.text}
								</Typography>
							</Box>
						))}
					</Box>
					<Box sx={categoriesWrapperStyles}>
						{categoriesArr?.map((el, index) => (
							<Button
								color={
									el?.variant === "primary"
										? "primary"
										: "info"
								}
								size="medium"
								sx={buttonStyles}
								key={index}>
								{el?.name}
							</Button>
						))}
					</Box>
					<Box sx={cardWrapperStyle}>
						{suggestions_arr.slice(0, 3).map((el, index) => {
							return <CardBase {...{ el }} key={index} />;
						})}
						<Box sx={decorationStyles}>
							<Image
								src={"/images/TashkentCity.jpeg"}
								objectFit="cover"
								layout="fill"
								alt="decoration"
								style={{ borderRadius: "4px" }}
							/>
							<Box sx={overlayStyles} />
							<Box
								sx={{
									mx: "auto",
									maxWidth: 220,
									position: "relative",
									zIndex: 1
								}}>
								<Typography
									variant="h6"
									mb={"30px"}
									mt={"117px"}
									color={"common.white"}>
									More collected properties near University
									College London
								</Typography>
								<Button color="primary" size="large" fullWidth>
									Check out
								</Button>
							</Box>
						</Box>
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
	justifyContent: "center"
};

const stickersWrapper = {
	display: "flex",
	alignItems: "center",
	columnGap: "16px",
	mb: "34px"
};

const contentWrapper = {
	display: "flex",
	columnGap: "6px",
	alignItems: "center"
};

const decorationStyles = {
	maxWidth: 267,
	height: 314,
	position: "relative",
	width: "100%",
	borderRadius: "4px"
};

const overlayStyles = {
	bgcolor: "rgba(50,50,50,0.5)",
	position: "absolute",
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	zIndex: 0,
	borderRadius: "4px"
};

const buttonStyles = {
	fontSize: "14px !important",
	fontFamily: "'PoppinsLight',sans-serif !important"
};

const categoriesWrapperStyles = {
	mb: "41px",
	display: "flex",
	justifyContent: "space-between"
};

const stickersArr = [
	{ icon: <Shield />, text: "College classmate's choices" },
	{ icon: <Order />, text: "Convenient for commuting" },
	{ icon: <Certificate />, text: "Special offer" }
];

const categoriesArr = [
	{ name: "University College Tashkent", variant: "primary" },
	{ name: "King's College Tashkent", variant: "info" },
	{ name: "Imperial College Tashkent", variant: "info" },
	{ name: "Queen Mary University of Tashkent", variant: "info" },
	{ name: "London School of Economics ", variant: "info" }
];
