import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Hover from "@/components/Buttons/Hover";
import Business from "@/public/icons/Business";
import Check from "@/public/icons/Check";
import LogIn from "@/public/icons/LogIn";
// import Account from "@/public/icons/Account";
// import  Avatar  from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logo from "@/public/icons/Logo";
import AuthModal from "@/components/Modals/Auth";
import TooltipClick from "@/components/Tooltips/TooltipClick";

export const rightBlockArr = ({
	open,
	handleTooltipClose,
	handleTooltipOpen,
	isHome
}) => [
	<TooltipClick {...{ open, handleTooltipClose, content: tooltipContent }}>
		<Button
			variant="outlined"
			color="info"
			onClick={handleTooltipOpen}
			sx={buttonStyles(isHome)}>
			CityShahar for Bussiness
			<KeyboardArrowDownIcon sx={{ color: "inherit" }} />
		</Button>
	</TooltipClick>,
	<Button variant="outlined" color="info" sx={buttonStyles(isHome)}>
		Write a Review
	</Button>,
	<AuthModal />

	// <Avatar sx={{ bgcolor: "secondary.main" }}>
	// 	<Account />
	// </Avatar>
];

const tooltipContent = (
	<Box sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}>
		<Hover text={"Add a Bussiness"}>
			<Business />
		</Hover>
		<Hover text={"Claim our Bussiness"}>
			<Check />
		</Hover>
		<Hover text={"Log in to Bussiness Account"}>
			<LogIn />
		</Hover>
		<Divider />
		<Hover text={"Explore SolveMe for Bussiness"}>
			<Logo />
		</Hover>
	</Box>
);

const buttonStyles = (isHome) => ({
	border: "none",
	boxShadow: "none",
	color: isHome ? "#fff" : "#000",
	":hover": {
		border: "none",
		boxShadow: "none",
		bgcolor: isHome ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
		color: isHome ? "#fff" : "#000"
	},
	fontSize: "14px !important"
});
