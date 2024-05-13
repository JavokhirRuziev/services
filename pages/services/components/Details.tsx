import Furniture from "@/public/icons/Furniture";
import SingleCard from "@/components/Cards/SingleCard";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Walk from "@/public/icons/Walk";
import Car from "@/public/icons/Car";
import Student from "@/public/icons/Student";

export default () => {
	return (
		<Container>
			<Box sx={detailsWraper}>
				<Box>
					<Typography variant="h2" color={"common.black"} mb={2}>
						Property details
					</Typography>
					<Typography variant="h5" color="grey.600" mb={5}>
						This is a newly refurbished property, we currently only
						have CGI images available.
					</Typography>
					<Box sx={cardActionsWrapperStyles}>
						{actions_arr.map((el, index) => (
							<Box key={index} sx={actionsWrapperStyles}>
								{el?.icon}
								<Typography variant="h6" color={"grey.600"}>
									{el?.text}
								</Typography>
							</Box>
						))}
					</Box>
					<Typography variant="h2" mb={2}>
						Facilities & Services
					</Typography>
					<Typography variant="h5" color={"grey.600"} mb={1}>
						Facilities & Services
					</Typography>
					<Typography
						variant="h5"
						color={"grey.600"}
						component={"div"}
						sx={{ display: "flex", columnGap: 1.5 }}>
						<Furniture />
						Fully Furnished
					</Typography>
				</Box>
				<Box>
					<SingleCard />
				</Box>
			</Box>
		</Container>
	);
};

const detailsWraper = {
	display: "flex",
	mt: 5,
	mb: "131px",
	justifyContent: "space-between"
};

const cardActionsWrapperStyles = {
	display: "flex",
	width: "100%",
	p: 0,
	maxWidth: 540,
	columnGap: "10px",
	mb: "131px"
};

const actionsWrapperStyles = {
	display: "flex",
	alignItems: "center",
	columnGap: 1
};

const actions_arr = [
	{
		icon: <Student size={25} />,
		text: "Distance to UCFB Wembley Campus:"
	},
	{
		icon: <Walk size={25} />,
		text: "67 mins"
	},
	{ icon: <Car size={20} />, text: "16 mins" }
];
