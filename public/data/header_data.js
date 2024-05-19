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
import AuthModal from "@/components/Modals/Auth";
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
import IconButtonGrey from "@/components/Buttons/IconButtonGrey";
import ButtonInfo from "@/components/Buttons/ButtonInfo";

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
		<Box>
			<ButtonInfo
				isHome={isHome}
				onClick={() => handleTooltipOpen("business")}>
				CityShahar for Bussiness
				<KeyboardArrowDownIcon sx={{ color: "inherit" }} />
			</ButtonInfo>
		</Box>
	</TooltipClick>,
	<ButtonInfo isHome={isHome}>Write a Review</ButtonInfo>,
	// <AuthModal />
	<Box sx={accountWrapperStyles}>
		<Box sx={iconWrapperStyles(isHome)}>
			<IconButtonGrey isHome={isHome}>
				<Notification />
			</IconButtonGrey>
			<IconButtonGrey isHome={isHome}>
				<Saved />
			</IconButtonGrey>
		</Box>
		<TooltipClick
			{...{
				open: open["account"],
				handleTooltipClose: () => handleTooltipClose("account"),
				content: accountContent(push),
				placement: "bottom-start"
			}}>
			<Avatar
				sx={avatarStyles}
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

const avatarStyles = {
	position: "relative",
	cursor: "pointer",
	width: 44,
	height: 44
};

const contentStyles = (sx) => ({
	display: "flex",
	flexDirection: "column",
	rowGap: 1,
	...sx
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
