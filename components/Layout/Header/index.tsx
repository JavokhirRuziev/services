import { Box, Button, Typography } from "@mui/material";
import SearchInput from "./components/SearchInput";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "@/public/icons/Logo";
import { rightBlockArr } from "./components/data";
import breakpoints from "utils/breakpoints";
import HeaderDrawer from "@/components/Drawers/HeaderDrawer";
import SearchIcon from "@mui/icons-material/Search";
import SideBarAccordion from "@/components/Accordions/SideBarAccordion";

export default () => {
	const { pathname } = useRouter();
	const { mobile, tablet } = breakpoints();
	const isHome = pathname === "/";
	const logoColor = mobile
		? "black"
		: tablet
		? "black"
		: isHome
		? "white"
		: "black";
	const logoTextColor = {
		mobile: "black",
		tablet: "black",
		desktop: isHome ? "white" : "black"
	};
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");

	const handleTooltipClose = () => {
		setOpen(false);
	};

	const handleTooltipOpen = () => {
		setOpen(true);
	};

	return (
		<Box sx={headerWrapperStyles(isHome)} data-testid="header-component">
			<Box sx={headerContainerStyles(isHome)}>
				<Box sx={headerAppbarWrapperStyles}>
					<Link href={"/"} style={logoStyles}>
						{!mobile && (
							<Typography
								variant="h4"
								fontWeight={"bold"}
								color={logoTextColor}>
								SolveMe
							</Typography>
						)}
						<Logo color={logoColor} />
					</Link>
					<SearchInput {...{ search, setSearch }} />
					{!mobile && !tablet ? (
						<Box
							sx={rightBlockClasses}
							data-testid="right-block-element">
							{rightBlockArr({
								open,
								handleTooltipClose,
								handleTooltipOpen
							}).map((el, index) => (
								<React.Fragment key={index}>
									{el}
								</React.Fragment>
							))}
						</Box>
					) : search && mobile ? (
						<Button
							size={mobile ? "small" : "medium"}
							variant="contained"
							color="secondary"
							sx={{ maxWidth: 50 }}>
							<SearchIcon
								sx={{
									color: "primary.contrastText",
									height: "100%"
								}}
							/>
						</Button>
					) : (
						<HeaderDrawer>
							<Box sx={drawerClasses}>
								<SideBarAccordion />
							</Box>
						</HeaderDrawer>
					)}
				</Box>
			</Box>
		</Box>
	);
};
const headerContainerStyles = (isHome: boolean) => ({
	p: {
		mobile: "20px 0px 40px",
		tablet: "20px 0px 40px",
		desktop: "20px 0px"
	},
	position: {
		mobile: "relative",
		tablet: "relative",
		desktop: isHome ? "absolute" : "relative"
	},
	zIndex: 2,
	width: "100%",
	maxWidth: 1300,
	left: "50%",
	transform: "translateX(-50%)"
});

const logoStyles = {
	textDecoration: "none",
	color: "white",
	display: "flex",
	columnGap: "10px"
};

const headerAppbarWrapperStyles = {
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center"
};

const headerWrapperStyles = (isHome: boolean) => ({
	bgcolor: isHome ? "transparent" : "white",
	borderBottom: "1px solid lightgray",
	px: 1
});

const rightBlockClasses = {
	display: "flex",
	columnGap: 2,
	alignItems: "center",
	whiteSpace: "nowrap"
};
const drawerClasses = {
	display: "flex",
	columnGap: 2,
	alignItems: "center",
	whiteSpace: "nowrap",
	flexDirection: "column"
};
