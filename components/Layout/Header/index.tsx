import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchInput from "./components/SearchInput";
import React, { useState } from "react";
import { useRouter } from "next/router";
import breakpoints from "utils/breakpoints";
import HeaderDrawer from "@/components/Drawers/HeaderDrawer";
import SideBarAccordion from "@/components/Accordions/SideBarAccordion";
import Search from "@/public/icons/Search";
import Link from "next/link";
import Logo from "@/public/icons/Logo";
import { rightBlockArr } from "@/public/data/header_data";

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
						<Logo color={logoColor} />
					</Link>
					<SearchInput {...{ search, setSearch, isHome }} />
					{!mobile && !tablet ? (
						<Box
							sx={rightBlockClasses}
							data-testid="right-block-element">
							{rightBlockArr({
								open,
								handleTooltipClose,
								handleTooltipOpen,
								isHome
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
							<Search />
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
		desktop: isHome ? "20px 0px" : "20px 0px 45px"
	},
	position: {
		mobile: "relative",
		tablet: "relative",
		desktop: isHome ? "absolute" : "relative"
	},
	zIndex: 2,
	width: "100%",
	maxWidth: 1460,
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
