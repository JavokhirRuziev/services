import ButtonGradient from "@/components/Buttons/ButtonGradient";
import Success from "@/public/icons/Success";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default ({ handleClose }: { handleClose: () => void }) => {
	return (
		<Box sx={wrapperStyles}>
			<Success />
			<Typography variant="h5" mb={1} mt={2.5}>
				Successfully
			</Typography>
			<Typography variant="h6" color={"grey.400"} mb={4}>
				The account was successfully created
			</Typography>
			<ButtonGradient fullWidth size="large" onClick={handleClose}>
				Close
			</ButtonGradient>
		</Box>
	);
};

const wrapperStyles = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column"
};
