import { theme } from "@/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default ({ children, text, onClick, sx, sxContainer, active }: any) => {
	return (
		<Box sx={wrapperStyles(sxContainer, active)} {...{ onClick }}>
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

const wrapperStyles = (sxContainer: any, active: string) => ({
	display: "flex",
	columnGap: "12px",
	padding: "15px",
	alignItems: "center",
	opacity: 0.8,
	cursor: "pointer",
	"&:hover": {
		bgcolor: "grey.100",
		borderLeft: `1px solid ${theme.palette.secondary.main}`
	},
	bgcolor: active ? "grey.100" : "common.white",
	borderLeft: active
		? `1px solid ${theme.palette.secondary.main}`
		: "1px solid transparent",
	borderBottom: `1px solid ${theme.palette.grey[400]}`,
	...sxContainer
});
