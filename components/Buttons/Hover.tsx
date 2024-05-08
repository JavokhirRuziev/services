import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default ({ children, text, onClick }: any) => {
	return (
		<Box sx={wrapperStyles} {...{ onClick }}>
			{children && children}
			<Typography id="text" variant={"body1"} whiteSpace={"nowrap"}>
				{text}
			</Typography>
		</Box>
	);
};

const wrapperStyles = {
	display: "flex",
	columnGap: "5px",
	padding: "10px 16px",
	borderRadius: "4px",
	alignItems: "center",
	opacity: 0.8,
	cursor: "pointer",

	"&:hover": {
		bgcolor: "secondary.light",
		path: { fill: "white" },
		"#text": {
			color: "white"
		}
	}
};
