import { theme } from "@/theme";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { actions_arr, footer_links_arr } from "@/public/data/footer_data";
import TooltipClick from "../../Tooltips/TooltipClick";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

export default () => {
	const [open, setOpen] = useState({ lang: false, countries: false });
	const [selectedState, setSelectedState] = useState({
		lang: "English",
		countries: "United states"
	});

	const handleSetState = (key: string, value: string) => {
		setSelectedState({ ...selectedState, [key]: value });
	};
	const handleTooltipClose = (action: string) => {
		setOpen({ ...open, [action as "lang" | "countries"]: false });
	};

	const handleTooltipOpen = (action: string) => {
		setOpen({ ...open, [action as "lang" | "countries"]: true });
	};

	return (
		<Box sx={footerWrapper} data-testid="footer-component">
			<Container>
				<Box sx={footerLinksWrapperStyles}>
					{footer_links_arr.map((el) => (
						<Box
							sx={{ display: "flex", flexDirection: "column" }}
							key={el?.title}>
							<Title>{el?.title}</Title>
							{el?.children.map((el) => (
								<Subtitle key={el?.name}>{el?.name}</Subtitle>
							))}
						</Box>
					))}
					<Box sx={tooltipClickStyles}>
						{actions_arr({ selectedState, handleSetState }).map(
							(el) => (
								<React.Fragment key={el.title}>
									<Title>{el.title}</Title>
									<TooltipClick
										placement={"top"}
										{...{
											open:
												open &&
												open[
													el.action as keyof typeof open
												],
											handleTooltipClose: () =>
												handleTooltipClose(el.action),
											content: el.content
										}}>
										<Link
											underline="none"
											color={"secondary"}
											sx={linkStyles}
											onClick={() =>
												handleTooltipOpen(el.action)
											}>
											<Typography
												variant="body2"
												fontWeight={400}
												letterSpacing={2}
												color={theme.palette.grey[500]}>
												{el.children}
											</Typography>
											<KeyboardArrowDownIcon />
										</Link>
									</TooltipClick>
								</React.Fragment>
							)
						)}
					</Box>
				</Box>
				<Box sx={bottomStyles}>
					<Typography variant="body2" color={"grey.500"}>
						Copyright © 2004–2024 CityShahar Inc.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

const footerWrapper = {
	bgcolor: "grey.300",
	padding: "60px 0px 60px"
};

const bottomStyles = {
	mt: "60px",
	bgcolor: "grey.300"
};

const footerLinksWrapperStyles = {
	display: "flex",
	justifyContent: "space-between",
	flexWrap: "wrap",
	rowGap: "30px",
	columnGap: "30px"
};

const linkStyles = {
	cursor: "pointer",
	marginBottom: "10px",
	display: "flex",
	alignItems: "center"
};

const tooltipClickStyles = {
	display: "flex",
	flexDirection: "column",
	width: { mobile: 140, tablet: 150, desktop: "auto" }
};
