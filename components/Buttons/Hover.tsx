import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default ({ children, text, onClick, sx, sxContainer }: any) => {
	return (
		<Box sx={wrapperStyles(sxContainer)} {...{ onClick }}>
			{children && children}
			<Typography
				id="text"
				variant={"body1"}
				whiteSpace={"nowrap"}
				sx={{ ...sx }}>
				{text}
			</Typography>
		</Box>
	);
};

const wrapperStyles = (sxContainer: any) => ({
	display: "flex",
	columnGap: "12px",
	padding: "5px",
	borderRadius: "4px",
	alignItems: "center",
	opacity: 0.8,
	cursor: "pointer",
	"&:hover": {
		bgcolor: "grey.400"
	},
	...sxContainer
});
