import Typography from "@mui/material/Typography";

export default ({ children }: any) => (
	<Typography variant="h6" letterSpacing={3} mb={2} fontWeight={900}>
		{children}
	</Typography>
);
