import Typography from "@mui/material/Typography";

export default ({ array }: { array: string[] }) => {
	return (
		<Typography variant="body1" mb={2} color={"grey.400"}>
			Home
			{array?.map((el, index) => (
				<Typography
					key={index}
					variant="h6"
					component={"span"}
					color={
						index + 1 === array.length ? "common.black" : "grey.400"
					}>
					{el}
				</Typography>
			))}
		</Typography>
	);
};
