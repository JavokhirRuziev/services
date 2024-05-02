import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Categories from "./Categories";
import { theme } from "@/theme";

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
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Typography
					color={{
						mobile: "black",
						tablet: "black",
						desktop: isHome ? "white" : "black"
					}}
					variant="body2">
					{el?.name}
				</Typography>
				<KeyboardArrowDownIcon
					sx={{
						color: {
							mobile: "black",
							tablet: "black",
							desktop: isHome ? "white" : "black"
						}
					}}
				/>
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
		top: 36
	},

	cursor: "pointer",
	position: "relative",
	pb: "10px",
	zIndex: 9999,
	borderBottom: "3px solid transparent"
};
