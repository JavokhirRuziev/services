import Button from "@mui/material/Button";

type ButtonInfoProps = {
	isHome: boolean;
	onClick?: () => void;
	children: React.ReactNode;
};

export default ({ isHome, onClick, children }: ButtonInfoProps) => {
	return (
		<Button
			variant="outlined"
			color="info"
			onClick={onClick}
			sx={buttonStyles(isHome)}>
			{children}
		</Button>
	);
};

const buttonStyles = (isHome: boolean) => ({
	border: "none",
	boxShadow: "none",
	color: isHome ? "#fff" : "#000",
	":hover": {
		border: "none",
		boxShadow: "none",
		bgcolor: isHome ? "rgba(255,255,255,0.3)" : "grey.100",
		color: isHome ? "#fff" : "#000"
	},
	fontSize: "14px !important"
});
