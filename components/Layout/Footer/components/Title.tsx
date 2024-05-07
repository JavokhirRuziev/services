import { Typography } from "@mui/material";

export default ({ children }: any) => (
	<Typography variant="h5" letterSpacing={3} mb={2} fontWeight={"bold"}>
		{children}
	</Typography>
);
