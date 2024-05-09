import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Hover from "@/components/Buttons/Hover";
import Button from "@mui/material/Button";

export default ({ arr }: any) => {
	return (
		<Box sx={wrapperStyles}>
			{arr?.map((el: any) => (
				<Hover text={el?.name} />
			))}

			<Divider />
			<Button variant="outlined" color="secondary" fullWidth>
				<Typography variant="h6" color={"secondary.main"}>
					Save
				</Typography>
			</Button>
		</Box>
	);
};

const wrapperStyles = {
	display: "flex",
	rowGap: 1,
	flexDirection: "column",
	width: 200
};
