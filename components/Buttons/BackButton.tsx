import ArrowBack from "@/public/icons/ArrowBack";
import { theme } from "@/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default ({ goBack }: any) => {
	return (
		<Box
			display={"inline-block"}
			data-testid="back-button"
			onClick={goBack}>
			<Box sx={hoverButtonStyles}>
				<ArrowBack color={theme.palette.common.black} />
				<Typography id="text" data-testid="text">
					Back
				</Typography>
			</Box>
		</Box>
	);
};

const hoverButtonStyles = {
	mb: 2,
	display: "flex",
	columnGap: 0.5,
	alignItems: "center",
	cursor: "pointer",
	":hover": {
		"#text": {
			color: "grey.300"
		},
		"#arrow-back": {
			fill: "grey"
		}
	},
	width: "auto"
};
