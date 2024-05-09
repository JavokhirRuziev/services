import Button from "@mui/material/Button";
export default ({
	children,
	onClick,
	sx,
	size,
	startIcon,
	disableElevation,
	disableFocusRipple,
	disableRipple,
	disableTouchRipple,
	fullWidth
}: any) => {
	return (
		<Button
			color="secondary"
			sx={{
				background: "linear-gradient(#A0DAFB, #0A8ED9)",
				color: "white",
				":hover": {
					background: "linear-gradient(#A0DAFB, #0A8ED9)",
					color: "white"
				},
				...sx
			}}
			{...{
				onClick,
				size,
				startIcon,
				disableElevation,
				disableFocusRipple,
				disableRipple,
				disableTouchRipple,
				fullWidth
			}}>
			{children}
		</Button>
	);
};
