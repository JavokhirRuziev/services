import { ReactNode } from "react";
import TooltipClick from "@/components/Tooltips/TooltipClick";
import ButtonInfo from "@/components/Buttons/ButtonInfo";
import IconButtonGrey from "@/components/Buttons/IconButtonGrey";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { Box, Divider } from "@mui/material";
import { theme } from "@/theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Notification from "../icons/Notification";
import Saved from "../icons/Saved";
import Hover from "@/components/Buttons/Hover";
import Business from "../icons/Business";
import Check from "../icons/Check";
import LogIn from "../icons/LogIn";
import Logo from "../icons/Logo";
import Person from "../icons/Person";
import Booking from "../icons/Booking";
import Settings from "../icons/Settings";
import Stack from "../icons/Stack";
import Help from "../icons/Help";
import About from "../icons/About";
import LogOut from "../icons/LogOut";

type RightBlockArrProps = {
	open: Record<string, boolean>;
	handleTooltipClose: (key: string) => void;
	handleTooltipOpen: (key: string) => void;
	isHome: boolean;
	push: (url: string) => void;
};

export const rightBlockArr = ({
	open,
	handleTooltipClose,
	handleTooltipOpen,
	isHome,
	push
}: RightBlockArrProps): ReactNode[] => [
	<TooltipClick
		key="business"
		open={open["business"]}
		handleTooltipClose={() => handleTooltipClose("business")}
		content={businessContent}>
		<Box>
			<ButtonInfo
				isHome={isHome}
				onClick={() => handleTooltipOpen("business")}>
				CityShahar for Business
				<KeyboardArrowDownIcon sx={{ color: "inherit" }} />
			</ButtonInfo>
		</Box>
	</TooltipClick>,
	<ButtonInfo key="review" isHome={isHome}>
		Write a Review
	</ButtonInfo>,
	<Box key="account" sx={accountWrapperStyles}>
		<Box sx={iconWrapperStyles(isHome)}>
			<IconButtonGrey isHome={isHome}>
				<Notification />
			</IconButtonGrey>
			<IconButtonGrey isHome={isHome}>
				<Saved />
			</IconButtonGrey>
		</Box>
		<TooltipClick
			open={open["account"]}
			handleTooltipClose={() => handleTooltipClose("account")}
			content={accountContent(push)}
			placement="bottom-start">
			<Avatar
				sx={avatarStyles}
				onClick={() => handleTooltipOpen("account")}>
				<Image
					src="/images/profile.jpg"
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

const accountWrapperStyles = {
	display: "flex",
	alignItems: "center",
	columnGap: "30px",
	ml: "50px"
};

const iconWrapperStyles = (isHome: boolean) => ({
	display: "flex",
	alignItems: "center",
	columnGap: "30px",
	path: {
		stroke: isHome ? theme.palette.common.white : theme.palette.common.black
	}
});

const contentStyles = (sx: object = {}) => ({
	display: "flex",
	flexDirection: "column",
	rowGap: 1,
	...sx
});

const businessContent = (
	<Box sx={contentStyles()}>
		<Hover text="Add a Business">
			<Business />
		</Hover>
		<Hover text="Claim your Business">
			<Check />
		</Hover>
		<Hover text="Log in to Business Account">
			<LogIn />
		</Hover>
		<Divider />
		<Hover text="Explore SolveMe for Business">
			<Logo />
		</Hover>
	</Box>
);

const accountContent = (push: (url: string) => void) => (
	<Box sx={contentStyles({ width: 200 })}>
		<Hover text="View profile" onClick={() => push("/profile")}>
			<Person />
		</Hover>
		<Hover text="My Bookings">
			<Booking />
		</Hover>
		<Hover text="Settings">
			<Settings />
		</Hover>
		<Divider />
		<Hover text="Compare List">
			<Stack />
		</Hover>
		<Hover text="Help">
			<Help />
		</Hover>
		<Hover text="About">
			<About />
		</Hover>
		<Divider />
		<Hover text="Log out">
			<LogOut />
		</Hover>
	</Box>
);
