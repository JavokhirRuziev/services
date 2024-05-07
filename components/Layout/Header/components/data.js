import { Box, Button, Divider, Avatar } from "@mui/material";
import Hover from "@/components/Buttons/Hover";
import Business from "@/public/icons/Business";
import Check from "@/public/icons/Check";
import LogIn from "@/public/icons/LogIn";
import Account from "@/public/icons/Account";
import TooltipClick from "../../../Tooltips/TooltipClick";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logo from "@/public/icons/Logo";
import AuthModal from "@/components/Modals/Auth";

export const rightBlockArr = ({
	open,
	handleTooltipClose,
	handleTooltipOpen
}) => [
	<TooltipClick {...{ open, handleTooltipClose, content: tooltipContent }}>
		<Button
			variant="outlined"
			color="info"
			onClick={handleTooltipOpen}
			sx={buttonStyles}>
			CityShahar for Bussiness
			<KeyboardArrowDownIcon sx={{ color: "inherit" }} />
		</Button>
	</TooltipClick>,

	<Button variant="outlined" color="info" sx={buttonStyles}>
		Write a Review
	</Button>,
	// <Button variant="outlined" color="info">
	// 	Log In
	// </Button>,
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
			<Logo color="inherit" />
		</Hover>
	</Box>
);

const buttonStyles = {
	border: "none",
	boxShadow: "none",
	":hover": {
		border: "none",
		boxShadow: "none",
		bgcolor: "rgba(255,255,255,0.3)"
	},
	fontSize: "14px !important"
};
