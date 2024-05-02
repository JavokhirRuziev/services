import {
	Box,
	Button,
	ButtonGroup,
	Divider,
	InputBase,
	Paper
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DropDown from "./DropDown";
import { services_data } from "@/public/data/services_data";
import breakpoints from "@/utils/breakpoints";

export default ({ search, setSearch }: { search: string; setSearch: any }) => {
	const { mobile, tablet } = breakpoints();
	const handleSearch = (e: any) => setSearch(e.target.value);

	return (
		<Box sx={Wrapper}>
			<Paper component="form" data-testid="search-input">
				<ButtonGroup fullWidth sx={buttonGroupStyles}>
					<InputBase
						fullWidth
						placeholder="Categories"
						sx={{
							ml: 2
						}}
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
							<SearchIcon
								sx={{
									color: "primary.contrastText",
									height: "100%"
								}}
							/>
						</Button>
					)}
				</ButtonGroup>
			</Paper>
			<Box sx={dropDownWrapperStyles}>
				{services_data?.map((el) => (
					<DropDown key={el?.name} {...{ el, isHome: true }} />
				))}
			</Box>
		</Box>
	);
};

const Wrapper = {
	position: "relative",
	mx: { mobile: "20px", tablet: "30px", desktop: "50px" },
	maxWidth: 600,
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
	flexDirection: { mobile: "column", tablet: "row", desktop: "row" }
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
				sx={{
					height: { mobile: 1, tablet: 28, desktop: 28 },
					margin: 0.5
				}}
			/>
			<InputBase fullWidth placeholder="Location" sx={{ ml: 2 }} />
		</>
	) : tablet && !mobile ? (
		<>
			<Divider
				orientation={mobile ? "horizontal" : "vertical"}
				sx={{
					height: { mobile: 1, tablet: 28, desktop: 28 },
					margin: 0.5
				}}
			/>
			<InputBase fullWidth placeholder="Location" sx={{ ml: 2 }} />
		</>
	) : !tablet && !mobile ? (
		<>
			<Divider
				orientation={mobile ? "horizontal" : "vertical"}
				sx={{
					height: { mobile: 1, tablet: 28, desktop: 28 },
					margin: 0.5
				}}
			/>
			<InputBase fullWidth placeholder="Location" sx={{ ml: 2 }} />
		</>
	) : null;
};
