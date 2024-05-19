import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useRouter } from "next/router";
import breakpoints from "@/utils/breakpoints";
import HeaderDrawer from "@/components/Drawers/HeaderDrawer";
import SideBarAccordion from "@/components/Accordions/SideBarAccordion";
import Link from "next/link";
import { theme } from "@/theme";
import LogoText from "@/public/icons/LogoText";
import LogoDarkText from "@/public/icons/LogoDarkText";
import SearchInput from "./components/SearchInput";
import Search from "@/public/icons/Search";
import { rightBlockArr } from "@/public/data/header_data";

const HomePage = () => {
	const { pathname, push } = useRouter();
	const { mobile, tablet } = breakpoints();
	const isHome = pathname === "/";
	const [open, setOpen] = useState({ business: false, account: false });
	const [search, setSearch] = useState("");

	const handleTooltipClose = (key: string) => {
		setOpen({ ...open, [key]: false });
	};

	const handleTooltipOpen = (key: string) => {
		setOpen({ ...open, [key]: true });
	};

	return (
		<Box sx={headerWrapperStyles(isHome)} data-testid="header-component">
			<Box sx={headerContainerStyles(isHome)}>
				<Box sx={headerAppbarWrapperStyles}>
					<Link href="/" style={logoStyles}>
						<Box sx={logoWrapperStyles}>
							{isHome ? <LogoText /> : <LogoDarkText />}
						</Box>
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
								isHome,
								push
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

export default HomePage;

const headerContainerStyles = (isHome: boolean) => ({
	p: {
		mobile: "20px 0px 40px",
		tablet: "20px 0px 40px",
		desktop: isHome ? "20px 0px" : "20px 0px 40px"
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
	color: theme.palette.common.white,
	marginTop: 10
};

const headerAppbarWrapperStyles = {
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	p: "0px 38px"
};

const logoWrapperStyles = {
	display: "flex",
	columnGap: "10px",
	rowGap: "10px",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	mr: "48px"
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
