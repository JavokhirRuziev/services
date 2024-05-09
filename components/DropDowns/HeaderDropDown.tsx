import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Categories from "../Layout/Header/components/Categories";
import { theme } from "@/theme";
import ArrowBottom from "@/public/icons/ArrowBottom";

type DropDownTypes = {
	el: {
		name: string;
		category: { name: string; icon: JSX.Element }[];
	};
	isHome: boolean;
};

export default ({ el, isHome }: DropDownTypes) => {
	return (
		<Box
			sx={dropDownContainerStyles}
			role="button"
			data-testid="dropdown-component">
			<Box sx={{ display: "flex", alignItems: "center", columnGap: 0.5 }}>
				<Typography {...dynamicColor(isHome)} variant="body2">
					{el?.name}
				</Typography>
				<ArrowBottom color={isHome ? "white" : "black"} />
			</Box>
			<Box className="categories">
				<Categories category={el?.category} />
			</Box>
		</Box>
	);
};

const dropDownContainerStyles = {
	"&:hover .categories": {
		display: "block"
	},
	"&:hover": {
		borderBottom: `3px solid ${theme.palette.secondary.light}`
	},

	".categories": {
		display: "none",
		position: "absolute",
		left: { mobile: "-50px", tablet: "0px", desktop: "0px" },
		top: 32
	},

	cursor: "pointer",
	position: "relative",
	pb: "10px",
	zIndex: 9999,
	borderBottom: "3px solid transparent"
};

const dynamicColor = (isHome: boolean) => ({
	color: {
		mobile: "black",
		tablet: "black",
		desktop: isHome ? "white" : "black"
	}
});
