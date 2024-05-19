import BreadcrumbBase from "@/components/Breadcrumbs/BreadcrumbBase";
import HoverSecondary from "@/components/Buttons/HoverSecondary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default () => {
	return (
		<Box sx={{ maxWidth: 300 }}>
			<BreadcrumbBase array={[" / View Profile", " / Edit Profile"]} />
			<Typography variant="h5" fontWeight={900} mb={3}>
				Cameron Williamson <br />
				<Typography component={"span"} fontWeight={400}>
					A.’s Account Settings
				</Typography>
			</Typography>
			{actionsArr.map((el, index) => (
				<HoverSecondary
					key={index}
					text={el?.name}
					active={index === 0}
				/>
			))}
		</Box>
	);
};

const actionsArr = [
	{ name: "Profile" },
	{ name: "Phone" },
	{ name: "Email" },
	{ name: "Notifications" },
	{ name: "Language" }
];
