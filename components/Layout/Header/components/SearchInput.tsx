import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import ButtonGroup from "@mui/material/ButtonGroup";
import DropDown from "../../../DropDowns/HeaderDropDown";
import { services_data } from "@/public/data/services_data";
import breakpoints from "@/utils/breakpoints";
import Search from "@/public/icons/Search";
import { theme } from "@/theme";
import ButtonGradient from "@/components/Buttons/ButtonGradient";

export default ({
	search,
	setSearch,
	isHome
}: {
	search: string;
	setSearch: any;
	isHome: boolean;
}) => {
	const { mobile, tablet } = breakpoints();
	const handleSearch = (e: any) => setSearch(e.target.value);

	return (
		<Box sx={Wrapper}>
			<Paper component="form" data-testid="search-input">
				<ButtonGroup fullWidth sx={buttonGroupStyles}>
					<InputBase
						fullWidth
						placeholder="Location"
						sx={inputStyles}
						value={search}
						onChange={handleSearch}
					/>
					{inputSearchActionLogic({ search, mobile, tablet })}
					{!mobile && (
						<ButtonGradient
							size="medium"
							sx={{
								maxWidth: 50,
								border: "none",
								":hover": { border: "none" }
							}}>
							<Search />
						</ButtonGradient>
					)}
				</ButtonGroup>
			</Paper>
			<Box sx={dropDownWrapperStyles}>
				{services_data?.map((el) => (
					<DropDown key={el?.name} {...{ el, isHome }} />
				))}
			</Box>
		</Box>
	);
};

const Wrapper = {
	position: "relative",
	mr: { mobile: "20px", tablet: "30px", desktop: "35px" },
	maxWidth: 1007,
	width: "100%",
	minWidth: 250
};

const dropDownWrapperStyles = {
	mt: "10px",
	ml: "10px",
	display: "flex",
	columnGap: 2,
	position: "absolute"
};

const buttonGroupStyles = {
	display: "flex",
	flexDirection: { mobile: "column", tablet: "row", desktop: "row" },
	height: { mobile: "auto", tablet: "auto", desktop: 48 }
};

const inputSearchActionLogic = ({
	search,
	mobile,
	tablet
}: {
	search: string;
	mobile: boolean;
	tablet: boolean;
}) => {
	return search && mobile ? (
		<>
			<Divider
				orientation={mobile ? "horizontal" : "vertical"}
				sx={dividerStyles}
			/>
			<InputBase fullWidth placeholder="Location" sx={inputStyles} />
		</>
	) : tablet && !mobile ? (
		<>
			<Divider
				orientation={mobile ? "horizontal" : "vertical"}
				sx={dividerStyles}
			/>
			<InputBase fullWidth placeholder="Location" sx={inputStyles} />
		</>
	) : !tablet && !mobile ? (
		<>
			<Divider
				orientation={mobile ? "horizontal" : "vertical"}
				sx={dividerStyles}
			/>
			<InputBase fullWidth placeholder="Location" sx={inputStyles} />
		</>
	) : null;
};

const inputStyles = {
	ml: 2,
	".MuiInputBase-input": {
		height: 48,
		"::placeholder": {
			...theme.typography.body1
		}
	}
};

const dividerStyles = {
	height: { mobile: 1, tablet: 40, desktop: 40 },
	margin: 0.5
};
