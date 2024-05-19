import IconButton from "@mui/material/IconButton";

export default ({
	isHome,
	children,
	props
}: {
	isHome: boolean;
	children: any;
	props?: any;
}) => {
	return (
		<IconButton {...props} sx={iconButtonStyles(isHome)}>
			{children}
		</IconButton>
	);
};

const iconButtonStyles = (isHome: boolean) => ({
	":hover": { bgcolor: isHome ? "rgba(255,255,255,0.3)" : "grey.100" },
	":active": { bgcolor: isHome ? "rgba(255,255,255,0.3)" : "grey.100" }
});
