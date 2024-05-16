import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Hover from "@/components/Buttons/Hover";
import Business from "@/public/icons/Business";
import Check from "@/public/icons/Check";
import LogIn from "@/public/icons/LogIn";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Logo from "@/public/icons/Logo";
// import AuthModal from "@/components/Modals/Auth";
import TooltipClick from "@/components/Tooltips/TooltipClick";
import Notification from "../icons/Notification";
import Saved from "../icons/Saved";
import Image from "next/image";
import Person from "../icons/Person";
import Booking from "../icons/Booking";
import Settings from "../icons/Settings";
import Stack from "../icons/Stack";
import Help from "../icons/Help";
import About from "../icons/About";
import LogOut from "../icons/LogOut";
import { theme } from "@/theme";

export const rightBlockArr = ({
	open,
	handleTooltipClose,
	handleTooltipOpen,
	isHome,
	push
}) => [
	<TooltipClick
		{...{
			open: open["business"],
			handleTooltipClose: () => handleTooltipClose("business"),
			content: bussinessContent
		}}>
		<Button
			variant="outlined"
			color="info"
			onClick={() => handleTooltipOpen("business")}
			sx={buttonStyles(isHome)}>
			CityShahar for Bussiness
			<KeyboardArrowDownIcon sx={{ color: "inherit" }} />
		</Button>
	</TooltipClick>,
	<Button variant="outlined" color="info" sx={buttonStyles(isHome)}>
		Write a Review
	</Button>,
	// <AuthModal />
	<Box sx={accountWrapperStyles}>
		<Box sx={iconWrapperStyles(isHome)}>
			<Notification />
			<Saved />
		</Box>
		<TooltipClick
			{...{
				open: open["account"],
				handleTooltipClose: () => handleTooltipClose("account"),
				content: accountContent(push),
				placement: "bottom-start"
			}}>
			<Avatar
				sx={{ position: "relative", cursor: "pointer" }}
				onClick={() => handleTooltipOpen("account")}>
				<Image
					src={"/images/profile.jpg"}
					fill
					style={{ objectFit: "cover" }}
					alt="avatar"
				/>
			</Avatar>
		</TooltipClick>
	</Box>
];

const contentStyles = (sx) => ({
	display: "flex",
	flexDirection: "column",
	rowGap: 1,
	...sx
});

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

const accountWrapperStyles = {
	display: "flex",
	alignItems: "center",
	columnGap: "30px",
	ml: "50px"
};

const iconWrapperStyles = (isHome) => ({
	display: "flex",
	alignItems: "center",
	columnGap: "30px",
	path: {
		stroke: isHome ? theme.palette.common.white : theme.palette.common.black
	}
});

const bussinessContent = (
	<Box sx={contentStyles()}>
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
const accountContent = (push) => (
	<Box sx={contentStyles({ width: 200 })}>
		<Hover
			text={"View profile"}
			onClick={() => {
				push("/profile");
			}}>
			<Person />
		</Hover>
		<Hover text={"My Bookings"}>
			<Booking />
		</Hover>
		<Hover text={"Settings"}>
			<Settings />
		</Hover>
		<Divider />
		<Hover text={"Compare List"}>
			<Stack />
		</Hover>
		<Hover text={"Help"}>
			<Help />
		</Hover>
		<Hover text={"About"}>
			<About />
		</Hover>
		<Divider />
		<Hover text={"Log out"}>
			<LogOut />
		</Hover>
	</Box>
);
