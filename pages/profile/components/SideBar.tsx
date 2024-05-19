import Avatar from "@mui/material/Avatar";
// import AvatarIcon from "@/public/icons/AvatarIcon";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Edit from "@/public/icons/Edit";
import AccountOutlined from "@/public/icons/AccountOutlined";
import { theme } from "@/theme";
import Hover from "@/components/Buttons/Hover";
import Booking from "@/public/icons/Booking";
import Stack from "@/public/icons/Stack";
import About from "@/public/icons/About";
import Help from "@/public/icons/Help";
import LogOut from "@/public/icons/LogOut";
import { Divider } from "@mui/material";
import BreadcrumbBase from "@/components/Breadcrumbs/BreadcrumbBase";
import IconButtonGrey from "@/components/Buttons/IconButtonGrey";
import { useRouter } from "next/router";

export default () => {
	const { push } = useRouter();
	return (
		<Box>
			<BreadcrumbBase array={[" / View Profile"]} />
			<Box sx={accountCardWrapperStyles}>
				<Box sx={accountInfoWrapperStyles}>
					<Avatar sx={avatarStyles}>
						{/* <AvatarIcon /> */}
						<Image
							src={"/images/profile.jpg"}
							fill
							style={{ objectFit: "cover" }}
							alt="avatar"
						/>
					</Avatar>
					<Typography variant="h4" textAlign={"center"}>
						Javokhir Ruziev
					</Typography>
					<Typography
						variant="h6"
						color={"grey.600"}
						textAlign={"center"}>
						Uzbekistan, Tashkent
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between"
					}}>
					{accountActionsArr.map((el) => (
						<Box sx={actionButtonsWrapperStyles}>
							<IconButtonGrey
								isHome={false}
								props={{
									onClick: () => push("/profile/edit")
								}}>
								{el?.icon}
							</IconButtonGrey>
							<Typography variant="body2" color={"grey.600"}>
								{el?.name}
							</Typography>
						</Box>
					))}
				</Box>
			</Box>
			<Box>
				{optionsArr?.map((el, index) => {
					const isntLast = index + 1 !== optionsArr?.length;
					return (
						<>
							<Hover text={el?.name} sxContainer={{ my: 1 }}>
								{el?.icon}
							</Hover>
							{isntLast && <Divider />}
						</>
					);
				})}
			</Box>
		</Box>
	);
};

const optionsArr = [
	{ name: "My Bookings", icon: <Booking /> },
	{ name: "Compare List", icon: <Stack /> },
	{ name: "About", icon: <About /> },
	{ name: "Help", icon: <Help /> },
	{ name: "Log out", icon: <LogOut /> }
];

const accountActionsArr = [
	{ name: "Edit profile", icon: <Edit /> },
	{ name: "Add photo", icon: <AccountOutlined /> }
];

const actionButtonsWrapperStyles = {
	display: "flex",
	flexDirection: "column",
	rowGap: "2px",
	justifyContent: "center",
	alignItems: "center"
};

const accountCardWrapperStyles = {
	maxWidth: 174,
	p: "20px 40px",
	border: `1px solid ${theme.palette.grey[400]}`,
	borderRadius: "10px",
	mb: "10px"
};

const accountInfoWrapperStyles = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	mb: "12px"
};

const avatarStyles = {
	width: 120,
	height: 120,
	bgcolor: "transparent",
	position: "relative",
	mb: "5px"
};
