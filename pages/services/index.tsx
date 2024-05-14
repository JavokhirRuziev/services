import Layout from "@/components/Layout";
import Box from "@mui/material/Box";
import Map from "./components/Map";
import { top_10_arr } from "@/public/data/top_10";
import { useState } from "react";
import Filters from "./components/Filters";
import breakpoints from "@/utils/breakpoints";
import Typography from "@mui/material/Typography";
import DropDown from "../../components/DropDowns/ServicesDropDown";
import { filters } from "@/public/data/services_data";
import ServicesDrawer from "@/components/Drawers/ServicesDrawer";
import PaginationBase from "@/components/Paginations/PaginationBase";
import CardBase from "@/components/Cards/CardBase";

export default () => {
	const { desktop } = breakpoints();
	const [hoveredCardId, setHoveredCardId] = useState(null);

	return (
		<Layout>
			<Box sx={wrapperStyles}>
				{!desktop && <Filters />}
				<Box sx={{ py: "27px", px: "25px" }}>
					<Typography variant="body1" mb={"14px"} color={"grey.400"}>
						CityShahar /
						<Typography
							variant="h6"
							component={"span"}
							color={"common.black"}>
							{" "}
							Rent
						</Typography>
					</Typography>
					<Typography variant="h4" mb={"27px"}>
						Top 10 Rent houses Tashkent, Chilonzor{" "}
					</Typography>
					{desktop && (
						<Box display={"flex"} columnGap={1}>
							<ServicesDrawer>
								<Filters />
							</ServicesDrawer>
							{filters.map((el, index) => (
								<DropDown key={index} {...{ el }} />
							))}
						</Box>
					)}
					<Box sx={cardWrapperStyles}>
						{top_10_arr.map((el, index) => (
							<Box key={index} width={"100%"} maxWidth={364}>
								<CardBase
									{...{
										el,
										setHoveredCardId,
										hoveredCardId,
										maxWidth: 364
									}}
									isHoverAble
								/>
							</Box>
						))}
					</Box>
					<PaginationBase />
				</Box>
				<Map arr={top_10_arr} hoveredCardId={hoveredCardId} />
			</Box>
		</Layout>
	);
};

const cardWrapperStyles = {
	display: "grid",
	gridTemplateColumns: { desktop: "1fr", monitor: "1fr" },
	p: 3,
	scrollbarWidth: "none",
	rowGap: "20px",
	columnGap: "20px",
	justifyItems: "center"
};

const wrapperStyles = {
	display: "grid",
	gridTemplateColumns: {
		mobile: "480px 1fr",
		tablet: "480px 1fr",
		desktop: "480px 1fr",
		monitor: "300px 550px 1fr"
	}
};
