import {
	Box,
	Button,
	ButtonGroup,
	Divider,
	InputBase,
	Paper
} from "@mui/material";
import DropDown from "./DropDown";
import { services_data } from "@/public/data/services_data";
import breakpoints from "@/utils/breakpoints";
import Search from "@/public/icons/Search";
import { theme } from "@/theme";

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
						<Button
							size="medium"
							variant="contained"
							color="secondary"
							sx={{ maxWidth: 50 }}>
							<Search />
						</Button>
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
	mx: { mobile: "20px", tablet: "30px", desktop: "50px" },
	maxWidth: 707,
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
